module.exports = {
	hug: function (client, channel, context, target){
		console.log(`${context.username} used !hug`);
		client.say(channel, `${context.username} gave ${target} a biggole floofy hug!`)
	}
}