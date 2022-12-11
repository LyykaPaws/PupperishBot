//Begin Subscription and Resub Module

module.exports = {
	sub: function(client, username, channel){
		client.say(channel, `${username} has subscribed! PogChamp`);
		console.log('Sub message sent.');
	},

	resub: function(client, username, months, channel){
		client.say(channel, `PogChamp ${username} has resubbed for ${months} months! PogChamp`)
	}
}