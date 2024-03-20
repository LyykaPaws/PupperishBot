//Load Requirements
const tmi = require('tmi.js');
console.log("Loaded TMI");

//Create file loader, right now just for modules

function loader(file){
	try {
		return require(file);
		console.log(`${file} loaded.`);
	} catch (e){
		//console.log(e);
		console.log(`${file} couldn't load. Make sure its in the right folder and try again.\nRequired Modules should be in the required_modules folder, other modules should be in the custom_modules folder, and variables.js should be in the root.`);
		return null;
	} }



// Attempt to load variables. If they can't load, exit process.
let variables = loader('./variables.js');
if(variables === null) {
	process.exit(); };
//Attempt to load about module. If they can't load, exit process.
let about = loader('./required_modules/about.js');
if(about === null){
	process.exit(); };
//Attempt to load subscriptions module. If it cannot load, exit process.
let subscriptions = loader('./required_modules/subscriptions.js');
if(subscriptions === null){
	process.exit(); };
//Attempt to load tools module. If it cannot load, exit process.
let tools = loader('./required_modules/tools.js');
if(tools === null){
	process.exit(); };


// Load Custom Modules
let thanks = loader('./custom_modules/thanks.js');
let caster = loader('./custom_modules/caster.js');
let welcome = loader('./custom_modules/welcome.js');
let affection = loader('./custom_modules/affection.js');
let extras = loader('./custom_modules/extras.js');

//Global Variables
var modules = {
	discord: false,
	telegram: true,
	throne: true,
	lurk: true,
	ping: true,
	hug: true
};


//Set up console input
process.stdin.resume();
process.stdin.setEncoding('utf8');
console.log("Console Input Running");

// CHANGE THIS TO ITS OWN VARIABLE SO THE BROADCASTER ACCOUNT IS NOT NEEDED, possibly change code so this variable isn't needed at all
var channel = variables.broadcaster.name;

//Define configuration options
const opts = { //Set bot name and auth
	connection:{
		reconnect: true
	},
	identity: {
		username: variables.bot.name,
		password: variables.bot.key
	},
	channels: [
		variables.broadcaster.name
	] };
const opts2 = { //Set secondary bot name and auth using the broadcaster's identification for the ability to create VIPs (completely optional)
	connection:{
		reconnect: true
	},
	identity: {
		username: variables.broadcaster.name,
		password: variables.broadcaster.key
	},
	channels: [
		variables.broadcaster.name
	] };

//Create client using our options
const client = new tmi.client(opts); //Set up bot for issuing commands under bot name
const broadcaster = new tmi.client(opts2); //Set up bot for issuing commands under broadcaster's name

// Regster event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);
broadcaster.on('connected', onConnectedHandler2);
client.on('subscription', (channel, username, message, userstate, methods) => {
	subscriptions.sub(client, username, channel); });
client.on('resub', (channel, username, months, message, userstate, methods) => {
	subscriptions.resub(client, username, months, channel); });
client.on('subgift', (channel, username, streakMonths, recipient, methods, userstate) => {
	subscriptions.giftsub(client, username, recipient, channel); });
client.on('submysterygift', (channel, username, numbOfSubs, methods, userstate) => {
	subscriptions.mysteryGift(client, username, numbOfSubs, channel); });
client.on('anongiftpaidupgrade', (channel, username, userstate) => {
	subscriptions.anonContinue(channel, username, channel); });
client.on('giftpaidupgrade', (channel, username, sender, userstate) => {
	subscriptions.continue(channel, username, sender, channel); });

//Run function to log connections
function onConnectedHandler(addr, port){
	console.log(`* Connected to ${addr}:${port}`);
	console.log('* Current channels are: ' + client.getChannels()); };
function onConnectedHandler2(addr, port) {
	console.log(`* Connected to ${addr}:${port}`); };

// Connect to Twitch
client.connect().catch(console.error); // Connect Client to Bot Account, catch errors.
broadcaster.connect().catch(console.error);

process.once('SIGINT', function(){
	console.log('SIGINT detected.');
		client.disconnect();
			console.log("Client disconnected.");
		broadcaster.disconnect();
			console.log("Broadcaster disconnected. Exiting gracefully.")
		process.exit();	
});

// Console Input Handler
process.stdin.on('data', function(text) {
	//console.log(text);
	switch(text.trim()){
		case 'commands':
			console.log("List of commands: \nquit");
			break;
		case 'quit':
			client.disconnect();
				console.log("Client disconnected.");
			broadcaster.disconnect();
				console.log("Broadcaster disconnected. Exiting gracefully.")
			process.exit();	
			break;
		case 'uptime':
			console.log(`Client Uptime: ${process.uptime()}`);
			break;
		case 'info':
			console.log(`Client info:\nusername: ${variables.bot.name}, channel: ${channel}`);
			console.log(`Broadcaster info:\nusername: ${variables.broadcaster.name}, channel: ${channel}`);
			break;
		case 'ping':
			console.log('Pong!');
			break;
		case 'announcement1':
			tools.announcement1(client, channel, variables);
			break;
		case 'announcement2':
			tools.announcement2(client, channel, variables);
			break;
		default:
			console.log("Command not found.");
			break;
	} });

// Timer Events

function timedAnnouncements(client, channel, variables){
	setTimeout(() => {tools.announcement1(client, channel, variables)}, 30 * 60 * 1000);
	setTimeout(() => {tools.announcement2(client, channel, variables)}, 60 * 60 * 1000);

	//Restart Announcements
	setTimeout(() => {timedAnnouncements(client, channel, variables);}, 60 * 60 * 1000);
}

// Start Timed Announcements
setTimeout (() => {timedAnnouncements(client, channel, variables);}, 0);

// Command Message Handler
function onMessageHandler(target, context, msg, self) {
	if (self) { // Ignore messages from self
		return;
	}
	var commandName = msg.trim();
	
	// Commands

	if(commandName.startsWith('!')){

		switch(commandName.startsWith('!')){
			case commandName.startsWith('!thanks'):
				var commandtarget = msg.split(' ')[1];
				thanks.thanks(commandtarget, context, broadcaster, client, variables.broadcaster.name); // Code jumps to thanks module to complete action
				break;
			case commandName.startsWith('!nothanks'):
				var commandtarget = msg.split(' ')[1];
				thanks.nothanks(commandtarget, context, broadcaster, client, variables.broadcaster.name); // Code jumps to thanks module to complete action.
				break;
			case commandName.startsWith('!caster') || commandName.startsWith('!shoutout') || commandName.startsWith('!so'):
				var commandtarget = msg.split(' ')[1];
				caster.shoutout(commandtarget, context, client, variables.broadcaster.name); // Code jumps to caster module to complete action.
				break;
			case commandName.startsWith('!raid'):
				welcome.welcome(context, client, variables.broadcaster.name) // Code jumps to welcome module to complete action.
				break;
			case commandName.startsWith('!about'):
				about.about(client, variables.broadcaster.name, context); // Code jumps to about module to complete action.
				break;
			case commandName.startsWith('!hug'):
				if(modules.hug == true){ var commandtarget = msg.split(' ')[1]; affection.hug(client, variables.broadcaster.name, context, commandtarget); break; } else { break; };
			case commandName.startsWith('!ping'):
				if(modules.ping == true) { tools.ping(context, client, channel, process, variables); break; } 														else { break; };
			case commandName.startsWith('!telegram'):
				if (modules.telegram == true){ tools.telegram(context, client, channel, variables); break;} 														else { break; };
			case commandName.startsWith('!discord'):
				if (modules.discord == true){ tools.discord(context, client, channel, variables); break;}   														else { break;};
			case commandName.startsWith('!throne'):
				if(modules.throne == true){ tools.throne(context, client, channel, variables); break;}      														else { break; };
			case commandName.startsWith('!lurk'):
				if(modules.lurk == true){ extras.lurk(client, channel, context); break; }                    														else { break; };
			case commandName.startsWith('!commands'):
				console.log(`!commands sent by ${context.username}`);
				client.say(channel, 'Possible commands are: !raid, !about, !hug, !telegram, !discord, !throne, and !lurk');
				break;
			default:
				return;
		}
	} else {
		return;
	} };

/* BUGFIX LIST:



*/