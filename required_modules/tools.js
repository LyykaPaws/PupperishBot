module.exports = {
	ping: function(context, client, channel, process, variables){
		if (context['user-type'] === 'mod' || context.username === channel) {
			console.log(`${context.username} used !ping.\nProcess uptime: ${process.uptime()}\nCurrent Channel: ${channel}`);
			client.say(channel, `Pong! Client uptime is ${Math.round(process.uptime())} seconds. Current channel is ${channel}.`);
		}
	},
	telegram: function(context, client, channel, variables){
		console.log(`${context.username} used !telegram.`);
		client.say(channel, `Feel free to join our telegram at ${variables.info.telegram}. Its where you'll see the most info going on about me, as well as where I post the most stream related info. I'm also far more active here than on discord!`);
	},
	discord: function(context, client, channel, variables){
		console.log(`${context.username} used !discord.`);
		client.say(channel, `Feel free to join our discord at ${variables.info.discord}. Its not very active but I do post when I go live and some updates in there regarding stream.`);
	}
};