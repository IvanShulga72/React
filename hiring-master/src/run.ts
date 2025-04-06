import {IExecutor} from './Executor';
import ITask from './Task';

export default async function run(executor: IExecutor, queue: AsyncIterable<ITask>, maxThreads = 0) {
    maxThreads = Math.max(0, maxThreads);
    /**
     * Код надо писать сюда
     * Тут что-то вызываем в правильном порядке executor.executeTask для тасков из очереди queue
     */

    const taskQueue: ITask[] = [];
    const activeTasks: Map<number, Promise<void>> = new Map<number, Promise<void>>();
    let isQueueProcessing: boolean = false;

    // Функция для обработки очереди задач
    const processQueue = async () => {
        if (isQueueProcessing) { return; }
        isQueueProcessing = true;

        while (true) {
            // Проверяем ограничение по потокам
            if (maxThreads > 0 && activeTasks.size >= maxThreads) {
                break;
            }

            // Берем следующую задачу, которую можно выполнить
            let nextTask: ITask | undefined;
            let nextTaskIndex = -1;

            for (let i = 0; i < taskQueue.length; i++) {
                const task = taskQueue[i];
                if (!activeTasks.has(task.targetId)) {
                    nextTask = task;
                    nextTaskIndex = i;
                    break;
                }
            }

            if (!nextTask) {
                // Нет задач, которые можно выполнить прямо сейчас
                if (activeTasks.size === 0 && taskQueue.length === 0) {
                    break;
                }
                // Ждем завершения хотя бы одной задачи
                await Promise.race(activeTasks.values());
                continue;
            }

            // Удаляем задачу из очереди
            taskQueue.splice(nextTaskIndex, 1);

            // Запускаем задачу
            const taskPromise = executor.executeTask(nextTask)
                .finally(() => {
                    activeTasks.delete(nextTask!.targetId);
                });

            activeTasks.set(nextTask.targetId, taskPromise);
        }

        isQueueProcessing = false;
    };

    // Асинхронно добавляем задачи из итератора в очередь
    (async () => {
        for await (const task of queue) {
            taskQueue.push(task);
            processQueue().catch(() => {});
        }
    })().catch(() => {});

    // Обрабатываем очередь, пока есть задачи
    while (true) {
        await processQueue();
        if (activeTasks.size === 0 && taskQueue.length === 0) {
            // Проверяем, не появились ли новые задачи в итераторе
            // Для этого делаем небольшую паузу перед завершением
            await new Promise(resolve => setTimeout(resolve, 10));
            if (activeTasks.size === 0 && taskQueue.length === 0) {
                break;
            }
        }
    }
}
