
const minhaPromessa = new Promise((resolve,reject) => {
    setTimeout( () => {
        console.log('erro 1')
        reject(new Error("Eita"))
     }, 2000)
    setTimeout( () => {
        console.log('resolve 1')
        resolve("Acabou")
    }, 2000);
   
})

console.log('antes')
minhaPromessa.then((result) => {
    console.log(result)
}).catch(error => {
    console.error(error)
})
console.log('depois')