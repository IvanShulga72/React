function hello() {
    console.log('Hello', this);
}

const person = {
    name: "Vlad",
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this), //указывает на window
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Job is ${phone}`);
    }
}

// const lena = Object.create(person)
// lena.age = 20;
// lena.name = 'Lena';
// lena.logInfo();

const lena = {
    name: 'Lena',
    age: 20
}

// const fnLenaInfoLog = person.logInfo.bind(lena);
// fnLenaInfoLog('frontend', '8-999-999-99-99');

// const fnLenaInfoLog = person.logInfo.bind(lena, 'frontend', '8-999-999-99-99');
// fnLenaInfoLog();

person.logInfo.bind(lena, 'frontend', '8-999-999-99-99')();
person.logInfo.call(lena, 'frontend', '8-999-999-99-99'); // то же что и bind, но сразу вызывает функцию
person.logInfo.apply(lena, ['frontend', '8-999-999-99-99']); // 2 арг: контекст и массив








