//let response = fetch('https://jsonplaceholder.typicode.com/users')
//.then(res => res.json())


    
/*const list = document.querySelector('ul')
let arr = ['One', 'Two', 'Three', 'Four']

console.log(list)
arr.forEach(chore =>{
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
        console.log(e.target.innerHTML)
        e.target.remove()
    })
    //console.log(element)
    list.appendChild(element)
})*/



/*const list = document.querySelector('ul')
let arr = ['One', 'Two', 'Three', 'Four']

console.log(list)
arr.forEach(chore =>{
    const element = document.createElement('li')
    const textNode = document.createTextNode(chore)
    element.appendChild(textNode)
    element.addEventListener('click', (e) => {
            const useInput = window.prompt(`Are you sure u want to delete? ${chore}`)
            if(useInput === 'YES' || useInput === 'yes')
                e.target.remove()
        })
    //console.log(element)
    list.appendChild(element)
}) */




/*let Name = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Shazam')
    },3000)
})
/*console.log(Name)
setTimeout(() => {
    console.log(Name)
},4000)*/
 
/*Name.then(name => {
    console.log(name)
})*/



//MINI PROJECT
/*ul = document.querySelector("ul");
let response = fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json()).then(data => {
    console.log(data);
    append_data = (element) => {
        lielement = document.createElement("li");
        user_detail = element['name'] + element['username'] + element['email']
        textnode = document.createTextNode(user_detail);
        lielement.appendChild(textnode);
        ul.appendChild(lielement)
    }
    data.forEach(append_data);
})*/



/*const table = document.querySelector('table')
console.log(table)

const createRow = (user)=>{
    let newRow = document.createElement('tr')
    let element = `
            <td> ${user.id}</td>
            <td> ${user.name}</td>
            <td> ${user.email}</td>
            <td> ${user.username}</td>`
            newRow.innerHTML = element
            return newRow
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            table.appendChild(createRow(user))
        })
    })*/



//problem with Promise
/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.forEach(user => {
            console.log(data)
        })
    }) */



/*    const fetchData = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
    const data = await response.json()
    console.log(data)
}

fetchData()*/



