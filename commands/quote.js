
module.exports = {
	name: 'quote',
	aliases: false,
	description: 'Famous quotes from famuos people!',
	cooldown: 1,
	guildOnly: true,
	args:false,
	usage:false,
	// eslint-disable-next-line no-unused-vars
	execute(msg, args) {
        try {
            const data = await getQuote()
            msg.reply(`${data.content} —${data.author}`);
        } catch (error) {
            msg.reply(error)
        }
	},
};