# Pupperish Bot
 
This is a custom chatbot written in Node.JS. Written by myself, LyykaPaws

## Requirements:
tmi.js

1 file needs to be written locally and placed in the root folder, as such:

Filename: variables.js
```js
modules.export = {
	botName:[your bots username goes here]
	botToken:oauth:[your bots auth token goes here]
	channelName:[your channel name goes here (needed for custom modules to work, without this they're useless]
	channelKey:[your channel auth token goes here, only required for the thanks module to work. If you don't want this, this line can be safely ignored.]
};
```
Obviously this file will contain your auth key(s) so do well to keep it hidden from view.
