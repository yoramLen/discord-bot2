require('dotenv').config();
const { Client, MessageAttachment, Message } = require('discord.js');
const discord = require('discord.js');
const Bot = new Client();
const token = process.env.TOKEN;
const prefix = process.env.PREFIX;
let version = 0.5;

let help = require('./commands').str;
let joke = require('./jokes').arr;
let commands = require('./commandos').arr;


function getUserFromMention(mention) {
    const matches = mention.match
}

Bot.on('ready', () => {
    console.log('This bot is online!')
})

Bot.on('message', msg => {

        let args = msg.content.substring(prefix.length).split(" ");
        if (msg.content.substr(0, prefix.length) === prefix) {
            switch (args[0]) {
                case commands[0]:
                    msg.channel.send('pong');
                    break;
                case 'website':
                    msg.channel.send('Koop je pc bij https://www.PCBuilders.be !');
                    break;
                case commands[1]:
                    let random = Math.floor(Math.random() * joke.length)
                    msg.channel.send(joke[random]);
                    break;
                case 'play':
                    msg.reply(' zoekt nog mensen om mee te spelen! Feel free to join!');
                    break;
                case 'info':
                    if (args[1] === 'version') {
                        msg.channel.send('Yoribot is nu versie ' + version);

                    } else if (args[1] === 'author') {
                        msg.channel.send('Ik ben gemaakt door de glorieuze Yoram Lenaers');
                    } else {
                        msg.channel.send('Sorry, ik snap deze command niet!');
                    }
                    break;
                case 'clear':
                    if (!args[1]) return msg.reply('Error, geef alsjeblieft een tweede argument in');
                    msg.channel.bulkDelete(args[1]);
                    break;

                case 'user':

                    const embed = new discord.MessageEmbed()
                        .setTitle('User info')
                        .setColor(0x3399ff)
                        .addField('Naam', msg.author.username)
                        .addField('Huidige server', msg.guild.name)
                        .setFooter('YoriBot == amazing!');
                    msg.channel.send(embed);
                    break;

                case 'meme':
                    let number = 85;
                    memeNumber = Math.floor(Math.random() * (number)) + 1;
                    msg.channel.send({ files: ["./memes/" + memeNumber + ".png"] });
                    break;

                case 'help':
                    msg.channel.send(help);
                    break;
                default:
                    msg.channel.send(help);
                    break;







            }


        }


    },

    Bot.login(token));