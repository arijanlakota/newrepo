
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
        const fetch = require('node-fetch')
        tags = [...args]
        try {
            const result = await fetch(`https://quotable.io/random?tags=${tags.join(",")}`)
            const data = await result.json()
            msg.reply(data)
        } catch (error) {
            console.log(error)
        }         
	},
};