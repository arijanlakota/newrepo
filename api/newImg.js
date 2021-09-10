const fetch = require('node-fetch')
async function getGif(q){
    try {
        const result = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=LRRU1EuIJQvtlpQ57zjSm8dRnvjxQa4S&${q && `q=${q}`}`)
        const response = await result.json()
        return  response.data[0].images.original.url
    } catch (error) {
        return error
    }


}
module.exports = {
    getGif
}