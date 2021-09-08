import fetch from 'node-fetch'
fetch("https://quotable.io/quotes?page=1")
.then((result) =>  { 
    console.log("nesto")
    return result.json()
}).then((data) => {
    let retArr = []
    for(let i = 0;i < data.results.length;i++){
        console.log(i)
        retArr.push({tags:data.results[i].tags,content:data.results[i].content})
    }
    console.log(retArr)
    
}).catch((error) => {console.log(error)})