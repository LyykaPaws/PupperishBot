//Begin Subscription and Resub Module

module.exports = {
	sub: function(client, username, channel){
		console.log(`Sub from ${username}`)
		client.say(channel, `${username} has subscribed! PogChamp`);
		console.log('Sub message sent.');
	},

	resub: function(client, username, months, channel){
		console.log(`Resub by ${username}`);
		client.say(channel, `PogChamp ${username} has resubbed for ${months} months! PogChamp`);
	},
	giftsub: function(client, username, recipient, channel){
		console.log(`Gift Sub from ${username} to ${recipient}`);
		client.say(channel, `PogChamp ${username} has gifted ${recipient} a sub! Don't forget to thank them! PogChamp`);
	},
	continue: function(client, username, gifter,channel){
		console.log(`Gift Sub Continue`);
		client.say(channel, `PogChamp ${username} is continuing the sub they got from ${gifter}! PogChamp`);
	},
	anonContinue: function(client, username, channel){
		console.log(`Anon Gift Sub Continue`);
		client.say(channel, `PogChamp ${username} is continuing the gift sub they got anonymously! PogChamp`)
	},
	/*anonGift: function(client, recipient, channel){
		console.log(`Anon Gift Sub`);
		client.say(channel, `PogChamp ${recipient} was just gifted a sub anonymously! Thank you Anon!`);
	}, Not used right now*/
	mysteryGift: function(client, username, number, channel){
		if(number > 1) {
			console.log(`Mystery Gifts`);
			client.say(channel, `PogChamp ${username} is gifting ${number} subs to the community!`);
		} else {
			console.log(`Mystery Gift`);
			client.say(channel, `PogChamp ${username} is gifting a sub to the community!`);
		}
	}
}