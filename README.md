# Pupperish Bot
 
This is a custom chatbot written in Node.JS. Written by myself, LyykaPaws

## Requirements:
tmi.js

1 file needs to be written locally and placed in the root folder, as such:

Filename: variables.js
```js
const bot = { name: '[bot username goes here without brackets]', key:'[bot oauth key goes here without brackets]'};
const broadcaster = { name:'[broadcaster name goes here without brackets, required for modules to work]', key:'[broadcaster oauth key goes here, optional if you dont want to use the thanks command]'};

module.exports.bot = bot;
module.exports.broadcaster = broadcaster;
```
Obviously this file will contain your auth key(s) so do well to keep it hidden from view.

Required files for the bot to run are all in the required_modules folder. The bot will not run without those files.