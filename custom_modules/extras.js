// Begin Extras Module

module.exports = {
	lurk: function (client, channel, context) {
		console.log(`${context.username} used !lurk`);
		client.say(channel, `${context.username} is gonna lurk. Enjoy the lurk friend! Thanks for hanging around! <3`);
	}
}