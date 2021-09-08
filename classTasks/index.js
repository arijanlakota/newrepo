'use strict'


import fetch from 'node-fetch'

// let randomLetters = 'kdsflkdsfjsdklfjsdlkfl'
// console.log(countLetters(randomLetters))









// Input: “adsjfdsfsfjsdjfhacabcsbajda”
// Output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }


// var test_string = "emocleW ot SJ ni nialP hsilgnE"
// console.log(reverse(test_string))
// << Welcome to JS in Plain English

// myPromise.then((value) => {
//     console.log("res",value)
// }).catch((error) => {
//     console.log(error)
// })

    // try{
    //     const data = await getQuote()
    //     console.log(data.results)
    // }catch(error){
    //     console.log(error)
    // }   
fetch("https://quotable.io/quotes?page=1")
.then((result) =>  { return result.json()
}).then((data) => {
    let retArr = []
    for(let i = 0;i <= data.results.length;i++){
        retArr.push({tags:data.results[i].tags,content:data.results[i].content})
    }
    console.log(retArr,"nesto")
    
}).catch((error) => {error})