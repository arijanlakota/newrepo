const fetch = require('node-fetch');
const {  getGif } = require('../api/newImg');

module.exports = {
	name: 'gif',
	aliases: false,
	description: 'gifs',
	cooldown: 1,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	async execute(msg, args) {
        inputValue = args[0]    
       const slika = await getGif(inputValue)
       msg.reply(slika)
    }
};