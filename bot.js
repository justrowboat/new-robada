const Discord = require("discord.js");
const client = new Discord.Client();


function commandIs(str, message) {
	return message.content.toLowerCase().startsWith(";" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
	if(pluck(mem.roles).includes(role)){
		return true;
	} else {
		return false;
	}
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', () => {
        client.user.setGame('Rust');
});

client.on('ready', () => {
        client.user.setGame('New Robada');
});

client.on('message', message => {
var args = message.content.split(/[ ]+/);
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
  if(commandIs("say", message)) {
	  if(hasRole(message.member, "Mod") || hasRole(message.member, "Admin")) {
		  if(args.length === 1) {
			  message.channel.sendMessage('You did not define a argument');
		  } else {
			  message.channel.sendMessage(args.join(" ").substring(5));
		  }
	  } else {
		  message.channel.sendMessage('Not authorized');
	  }
  }
	if(commandIs("vote", message)) {
        message.channel.fetchMessage(message.channel.lastMessageID).then(msg => msg.react('👍'))
        message.channel.fetchMessage(message.channel.lastMessageID).then(msg => msg.react('👎'))
        }
});

client.on('message', message => {
  if (message.content === '🤔')
    message.react('🤔');
});

/* Reacts on user with GR flag/Any chosen emoji
client.on('message', message => {
  // If the user ID is "defined"
  if (message.author.id === '254279600841031680') {
    // Send reaction after "author.id" posts.
	message.react('🇬🇷');

  }
});
*/

/*
client.on('message', message => {
  // If the user ID is "defined" Craft's ID below
  if (message.author.id === '63456328256856064') {
    // Send reaction after "author.id" posts.
	message.react('💩');

  }
});
*/

client.on('message', message => {
  all_emoji = client.guilds.first().emojis;
  if (message.author.id === '2542') {
    // Send reaction after "author.id" posts.
	all_emoji.array().forEach((emo) => {
      message.react(emo);
    });

  }
});

var msg = "test";
for (var g in client.guilds.array()) {
    client.guilds.array()[g].defaultChannel.send(msg);
}

/*
client.on('message', message => {
  // If the user ID is "defined" Jax's ID
  if (message.author.id === '134389860608901121') {
    // Send reaction after "author.id" posts.
	message.react('💩');
	
	message.react('🇮🇳');
	message.react('💻');
	message.channel.sendMessage('💩💩 🐍JAX🐍IS🐍A🐍ＲＥＰＴＩＬＥ🐍 💩💩');
  
  }
});
*/


client.login(process.env.BOT_TOKEN);
