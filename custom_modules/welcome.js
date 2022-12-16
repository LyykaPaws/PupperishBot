// Begin Raider Welcome

module.exports = {
	welcome: function(context,client,channel) {
		console.log(`* ${context.username} used !raid.`)
		client.say(channel, `Welcome raiders to ${channel}'s channel! If you enjoy the content, it would really help out if you clicked this link https://www.twitch.tv/${channel} or if you're on desktop, you can remove the raid portion of the URL. It makes your view count! Thanks again and enjoy the content!`)
	}
};