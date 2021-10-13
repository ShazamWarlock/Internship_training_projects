/*function greet(Name, age){
    //console.log(Name, age)
    console.log('Hello') 
    console.log('Hey '+ Name + ". Your age is "+ age)
}
//greet('Vrishir',20)*/
/*function add (a=0,b=0){
    console.log('declaration')
    var sum=a+b
    return sum
}

console.log(add(10,20))
//result = add(10,20)
//console.log(result)
var add = (a=0,b=0)=>{
    console.log('expression')
    var sum=a+b
    return sum
}
console.log(add(10,20))*/
/*var add=(a=0,b=0)=>{
    return a+b
}

var add=(a=0,b=0)=>a+b
console.log(add(10,20))*/


/*const greet=name=>'hi ' + name
console.log(greet('Prabakaran'))*/


//Call back FUNCTION
/*var arr=['go to the GYM', 'Eat Food', 'Clean House']

/*for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/


/*var callbackfunction=(element,index)=>{
    console.log(element,index)
}*/
/*arr.forEach((element,index)=>{
    console.log(element,index)
})*/

var button = document.querySelector('button')
var body = document.querySelector('body')

const callbackfunction = (event) =>{
    //console.log(input.)
    /*const inputValue = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)*/
    body.classList.toggle('dark')
}

button.addEventListener('click', callbackfunction)