var arr = [1,2,3,4,5,6,7,8]

/*arr.shift(6)  

console.log(arr)

arr.unshift(6) //puts new element at the beginning of the array
*/

/*var new_arr = arr.slice(2,5)  //gives elements from a to b in (a,b)

console.log(new_arr)*/

/*var new_arr=[]

for(var i =0; i< arr.length; i++){
    if(arr[i]%2===0) 
        new_arr.push(arr[i])
}
console.log(new_arr)*/

var new_arr = arr.filter((element, index) => {
    if(element <10)
        return true
})

console.log(new_arr)