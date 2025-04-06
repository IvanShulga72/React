console.log('request date...');
// setTimeout(() => {
//     console.log('preparing data...')
//     const backebdData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backebdData.modified = true
//         console.log('Data received', backebdData)
//     }, 2000)
// }, 2000);


const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('preparing data...')
        const backebdData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        // reject(new Error('error)'));
        resolve(backebdData);
    }, 2000)

})

p
    .then(function (data) {
        console.log('promise resolved', data)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                data.modified = true;
                console.log('Data received', data);
                resolve(data);
            }, 2000)

        })
    })
    .then((data1) => {
        console.log(data1, 1)
        data1.fromPromis = true;
        return data1
    })
    .then((data2) => {
        console.log(data2);
    })
    .catch(function (err) {
        console.log('promise rejected', err);
    })
    .finally(() => {
        console.log(1);
    })