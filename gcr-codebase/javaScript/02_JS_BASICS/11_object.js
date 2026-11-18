const person1 = {
    username : "user_123",
    email : "user@gmail.com",
    age : 20,
    subscriptions :{
        netflix : "Gold",
        amazonPrime : "basic"
    },
    show: function showDetails(){
        console.log("this is user:" + this.userName + "age is:"+this.age)
    }
}
person1.address="mathura"
console.log(person1["email"])
delete person1.username
console.log(person1)








const obj1={a:1,b:2,}
const obj2={c:3,d:4}
//const obj3 = Object.assign{obj1, obj2}
const obj3={...obj1,...obj2}
obj1.a="hello"
console.log("obj1",obj1)

console.log("obj3",obj3)



