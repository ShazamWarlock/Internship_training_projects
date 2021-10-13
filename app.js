/*function greet(Name, age){
    //console.log(Name, age)
    console.log('Hello') 
    console.log('Hey '+ Name + ". Your age is "+ age)
}
//greet('Vrishir',20)*/
function add (a=0,b=0){
    var sum=a+b
    return sum
}
//result = add(10,20)
//console.log(result)
var add= (a=0,b=0)=>{
    var sum=a+b
    return sum
}
console.log(add(10,20))