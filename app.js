/*console.log("one")

setTimeout(function timeout(){
    console.log("Timer 1");
},2000)

setTimeout(function timeout(){
    console.log("Timer 2");
},1000)

console.log("two")
console.log("two")
console.log("two")
console.log("two")
console.log("two")
console.log("two")
console.log("two")*/



/*setTimeout(() => {console.log('Timer')}, 0)

for(var i = 0; i<1000; i++){
    console.log(i)
}*/



/*let value = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        resolve('Hello')
    }, 3000)
})

console.log(value)

setTimeout(() => {
    console.log(value)
},4000)
//console.log(value)*/



/*let response = fetch('https://jsonplaceholder.typicode.com/users')

console.log(response)

setTimeout(() =>{
    const data = response
    console.log(response)
    console.log(data,json())
},2000)*/


let response = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json()).then(data => {
    console.log(data)
})
    




