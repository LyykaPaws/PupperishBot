// Begin Extras Module

module.exports = {
	lurk: function (client, channel, context) {
		console.log(`${context.username} used !lurk`);
		client.say(channel, `${context.username} is gonna lurk. Enjoy the lurk friend! Thanks for hanging around! <3`);
	},
	announcement1: function(client, channel) {
		console.log('Doing Telegram Timed Announcement');
		client.say(channel, 'Hey! Did you know we have a telegram group? Feel free to join! We\'re pretty friendly, promise we don\'t bite! https://t.me/lyykasden');
	},
	announcement2: function(client, channel) {
		console.log('Doing Throne Announcement');
		client.say(channel, 'Hey! Did you know Lyyka has a wishlist? Absolutely not required, but if you wanna give the puppo a gift, thats always an option! https://throne.com/lyykapaws');
	}
	
}