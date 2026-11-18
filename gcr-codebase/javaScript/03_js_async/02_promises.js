// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("Async task is complete")
//         resolve()
// },2000)


// })

// const promiseTwo = new Promise(function(resolve, reject){
//     let data= {username: "anushka", password: "1234"};
//     if(data){
//         resolve((data))
//     }
//     else{
//         reject("error:something went wrong")
//     }

// })

// promiseOne.then(function(data) {
//     console.log("promise is resolved")
// })
// .catch(function() {
//     console.log("promise is rejected")
// })

// .finally(function(){
//     console.log("promise is either rejected or resolved")
// })

// promiseTwo.then(function(){
//     console.log(data)
//     console.log("promise is resolved")
// })
// .catch(function(error){
//     console.log("promise is rejected")
//     console.log(error)
// })

// async function consumePromise(){
//     try{
//         const response = await PromiseTwo
//         console.log("response using async await", response)
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// consumePromise()

const data= fetch("https://jsonplaceholder.typicode.com/posts")
console.log("data is fetched from this endpoint api", data)