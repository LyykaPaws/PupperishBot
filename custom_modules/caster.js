// Begin Caster Module
function charRemoval(remove, check){ // Character removal function
	// Create a regex to find the string
	let reg = new RegExp(remove);

	// Replace anything that matches the regex with a null character
	return check.replace(reg, '');
}

module.exports = {
	charRemoval: function(remove, check){ // Character removal function
	// Create a regex to find the string
	let reg = new RegExp(remove);

	// Replace anything that matches the regex with a null character
	return check.replace(reg, '');
	},
	shoutout: function (target,context,broadcaster,client,channel){ // Set up to begin our module
		if (context['user-type'] === 'mod' || context.username === channel) { //Check if user is mod or channel owner
			if (target.startsWith('@')){ // If target of shoutout starts with @
				console.log(`* Input was: ${target}`); // Log that it did
				target = charRemoval('@', target); // Remove the @
				console.log(`* Input is now: ${target}`);
				client.say(channel, `Hey, make sure to check out ${target}! They are amazing and if you're not following them over at https://twitch.tv/${target} you definitely should be!`); // Make the shoutout in chat.
				console.log(`* ${target} was shouted out by ${context.username}`) // Log the shoutout and who did it
			} else {
				client.say(channel, `Hey, make sure to check out ${target}! They are amazing and if you're not following them over at https://twitch.tv/${target} you definitely should be!`); // Make the shoutout
				console.log(`* ${target} was shouted out by ${context.username}`) // Log the shoutout and who did it
			}
		} else { // If user does not have permission
			console.log(`${context.username} cannot make shoutouts!`); // Log that a user with insufficient permissions tried to shout someone out.
		}
	}
};