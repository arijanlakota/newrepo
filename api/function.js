'use strict'
//functional programming
//isolated functions
//pure functions
//functions with limitled side efects

// const array = [1,3,5,7,2]
// function getIndex(index,arr){
//     let result
//     arr.forEach((element,i) =>{
//         if(i === index){
//             result =  element
//         }
//     })
//     return result
// }
// // console.log(getIndex(2,array))
// const array = [{id:1,name:"Suad"},{id:1,name:"Ivan"},{id:1,name:"Dzejlan"},{id:1,name:"Izo"},{id:1,name:"Belma"},
// {id:1,name:"Arijan"},{id:1,name:"Emin"},{id:1,name:"Daris"}]
// const arr = []
// array.map(element => {arr.push(element.name)})
// console.log(arr)


// function getElement(array,index){
//     const result = array.slice(index,index+1)
//     return result[0]
// }
// const array = [1,2,3,4,5,6]
// Array.prototype.MyMap = function (callback){
//     let newArr = []
//     this.forEach(nesto => newArr.push(callback(nesto)))
//     return newArr

// }
// console.log(array.MyMap(element => element*2))
// const array = [1,2,4,5]
// Array.prototype.myFilter = function(callback){
//     let newArray = []
//     for(let i = 0 ; i < this.length;i++){
//         if(callback(this[i])){
//             newArray.push(this[i])
//         }
//     }
//     return newArray
// }
// console.log(array.myFilter(value => value % 2 === 0 ? true:false))
// const array = [{id :1,name:"Suad"},{id :2,name:"ivan"},{id :3,name:"dzejlan"},{id :4,name:"belma"}]
// function guc(arr){
//     const lista = arr.filter(value => value.id % 2 === 0 ? true:false)
//     const retLista = lista.map(value => value.name)
//     console.log(retLista)
// }
// guc(array)
Array.prototype.myReduce = function(callback,previousValue,currentValue){
    for(let  i =0;i < this.length;i++){
        currentValue = this[i]
        previousValue = callback(previousValue,currentValue)
    }
    return previousValue

} 
// console.log(array)
const arr = [1,2,3,4]
// arr.myReduce()
// const nesto = arr.reduce((sum,value) => sum + value)
// console.log(nesto)
// let sum = 0
// arr.myReduce((sum,value) => sum += value,sum,value)
const sum = 0
let value = 0
console.log(arr.myReduce((sum,value)=> sum += value,sum,value))