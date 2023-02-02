module.exports = {
	hug: function (client, channel, context, target){
		if(target === undefined){
			console.log(`${context.username} used !hug standalone.`);
			client.say(channel, `${context.username} gave themselves a hug! Sometimes we need to love ourselves too...`);
		}
		else {
			console.log(`${context.username} used !hug. Target = ${target}`);
			client.say(channel, `${context.username} gave ${target} a biggole floofy hug!`);
		}
	}
}