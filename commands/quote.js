const fetch = require('node-fetch');
const { getQuote, getQuoteminlen, getQuotemaxlen, getQuotefull } = require('../api/quoteAPI');
module.exports = {
	name: 'quote',
	aliases: false,
	description: 'Famous quotes from famuos people!',
	cooldown: 1,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
        
    //     tags = [...args]
    //     try {
    //         const result = await fetch(`https://quotable.io/random?tags=${tags.join(",")}`)
    //         const data = await result.json()
    //         msg.reply(data)
    //     } catch (error) {
    //         msg.reply(error)
    //     }         
    const minLength = 0
    const maxLength = 0
    const m = await getQuote()
    msg.reply(m)
    const m1 = await getQuoteminlen(minLength)
    msg.reply(m1)
    const m2 = await getQuotemaxlen(maxLength)
    msg.reply(m2)
    const m3 = await getQuotefull(maxLength,minLength)
    msg.reply(m3)
	},
};