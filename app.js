/*let a = 30
var b = 40
console.log(a,b)
a=10
b=43
console.log(a,b)*/


//"let" variable
//Block Scope
/*if(true){
    let Name = 'Shazam'     //doesnt work
    console.log(Name)
}
console.log(Name)

if(true){
    var Name = 'Shazam'     //works
    console.log(Name)
}
console.log(Name)*/


/*for(var i=0; i<10; i++){
    console.log('loop ran')
}
console.log(i)*/


//Nesting of scopes (parent and child)
/*if(true){
    let Name = "Shazam"
    if(true){
        console.log(Name)
    }
}
if(true){
    console.log(Name)
    if(true){
        let Name = "Shazam"
    }
}*/


/*
const print = () => {
    var Name = "Shazam"
    if(true){
        console.log(Name)
    }
    return Name
}
print()
console.log(Name)*/


//console.log(this.alert('HI'))


//Objects
/*let car = {
    Name: "C Class",
    manufacturer: "Mercedes",
    print: function(a) {
        console.log(a)
    }
}
car.print('Ferrari')
console.log(car)*/



/*let car = {
    Name: "C Class",
    manufacturer: "Mercedes",
    print: () => {
        console.log(`${car.Name} was manufactured by  ${car.manufacturer}`)
    }
}

console.log(Object.keys(car))
console.log(Object.values(car))*/


/*let obj = {
    h: "Hello ",
    w: "world",
    print: function() {
        console.log(this) //refers to object
        console.log(this.h + this.w);
        console.log(obj.h)
    }
}
console.log(obj.print("Shazam"))*/


/*let car = {
    Name: "C Class",
    manufacturer: "Mercedes",
    print: () => {
        console.log(`${car.Name} was manufactured by  ${car.manufacturer}`)
    }
}
console.log(car)
console.log(car.hasOwnProperty('Name'))
//console.log(Object)
//console.log(Object)
//console.log(Object.keys(car))
//console.log(Object.values(car))
*/


/*setTimeout(()=>{
    console.log("Shazam")
}, 0)

console.log('HI')*/



var data = fetch('https://jsonplaceholder.typicode.com/todos/10')
console.log(data)