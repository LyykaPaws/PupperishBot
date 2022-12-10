// Begin Thanks Module

module.exports =  {
	thanks: function (target,context,broadcaster,client,channel) {
		if (context['user-type'] === 'mod' || context.username === channel) {// Check if mod or channel owner
			broadcaster.say(channel, '/vip ' + target); // Give the VIP Badge to the target
			console.log(`* VIP Badge given to ${target} by ${context.username}`); // Log that the badge was given
			client.say(channel, `${context.username} just gave ${target} a VIP Badge!`) // Say in chat that the badge was given
		}
		else if (context.badges) {
			if(context.badges.vip) { // Check if the user is a VIP
				broadcaster.say(channel, "/unvip " + context.username); //Remove VIP from User
				broadcaster.say(channel, "/vip " + target); // Give the VIP Badge to their target
				console.log(`* VIP Badge transferred from ${context.username} to ${target}.`); // Log that the badge was transferred
				//client.say(channel, context.username + " just gave " + target + " their VIP Badge! What an awesome person!"); // Say in chat that the badge was transferred
				client.say(channel, `${context.username} just gave ${target} their VIP Badge! What an awesome person!`);
			}
		}
		else {
			console.log("* " + context.username + " is not a VIP or MOD, and cannot give VIP Badges."); // Log that the command was executed by a nonmod.
			return;
		}	
	},
	nothanks: function (target,context,broadcaster,client,channel){ // Get all the dependencies to run the command
		if(context['user-type'] === 'mod' || context.username === channel){
			broadcaster.say(channel, '/unvip ' + target); // Remove the VIP Badge from the target
			console.log(`* VIP Badge removed from ${target} by ${context.username}`); // Log the badge removal in console
			client.say(channel, `${target} musta been bad. They lost their VIP Privelages!`); // Say in chat that they were bad.
		}
		else {
			console.log(`${context.username} cannot run this command! They aren't a mod!`); // Log that a non-mod ran the command.
		}
	}
};
