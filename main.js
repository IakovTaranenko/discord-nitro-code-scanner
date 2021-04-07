const Discord = require('discord.js-light');
const PromptSync = require('prompt-sync')();
const Chalk = require('chalk');
const Axios = require('axios').default;

const Client = new Discord.Client();
const Token = PromptSync('Token >> ');

Client.on('ready', () => {
    console.log(`${Chalk.greenBright('[RUNNING]')} - Scanner has started running.`);
});

Client.on('message', Message => {
    if ((Message.content.includes('discord.gift') || Message.content.includes('discordapp.com/gifts/')) && Message.content.length >= 15) {
        var GuildName;

        if (Message.guild == null) {
            GuildName = (`${Message.author.username}'s PM`);
        } else {
            GuildName = Message.guild.name;
        }

        console.log(`${Chalk.yellowBright('[FOUND]')} - Found a message containing discord.gift!      Server: ${GuildName} | User: ${Message.author.username} | Message: ${Message}`);
        const MatchCase = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        const GiftURL = MatchCase.exec(Message.content)
        const GiftCode = GiftURL[0].split('/')[1];

        console.log(`${Chalk.yellowBright('[ATTEMPT]')} - Attempting to redeem code.      Server: ${GuildName} | User: ${Message.author.username} | Code: ${GiftCode}`);
        Axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${GiftCode}/redeem`,
            headers: {
                'Authorization': Client.Token
            }
        })
        .then(() => console.log(`${Chalk.greenBright('[SUCESS]')} - Reedemed nitro code.      Server: ${GuildName} | User: ${Message.author.username} | Code: ${GiftCode}`))
        .catch(x => console.log(`${Chalk.redBright('[FAILED]')} - Code was invalid.       Server: ${GuildName} | User: ${Message.author.username} | Code: ${GiftCode}`))
    }
});

Client.login(Token)
.then(() => console.log(`${Chalk.greenBright('[TOKEN]')} - Logged in successfully`))
.catch(err => console.log(`${Chalk.redBright('[TOKEN]')} - ${err}`))