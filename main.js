const Discord = require('discord.js');
const ReadLine = require('readline');
const Chalk = require('chalk');
const Axios = require('axios').default;

const Client = new Discord.Client();

const ReadLineInput = ReadLine.createInterface({
    input: process.stdin, 
    output: process.stdout
})

ReadLineInput.question('Token >> ', Token => {
    Client.on('ready', () => {
        console.log(`${Chalk.greenBright('[RUNNING]')} - Scanner has started running.`);
    });

    Client.on('message', Message => {
        if(Message.content.includes('discord.gift') || Message.content.includes('discordapp.com/gifts/')) {
            console.log(`${Chalk.yellow('[FOUND]')} - Found a message containing discord.gift!      Server: ${Message.guild.name}, User: ${Message.author.username}, Message: ${Message}`);
            const MatchCase = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
            const GiftURL = MatchCase.exec(message.content)
            const GiftCode = GiftURL[0].split('/')[1];

            console.log(`${Chalk.orange('[ATTEMPT]')} - Attempting to redeem code.      Server: ${Message.guild.name}, User: ${Message.author.username}, Code: ${GiftCode}`);
            Axios({
                method: 'POST',
                url: `https://discordapp.com/api/v6/entitlements/gift-codes/${GiftCode}/redeem`,
                headers: {
                    'Authorization': Client.Token
                }
            })
            .then(() => console.log(`${Chalk.green('[SUCESS]')} - Reedemed nitro code.      Server: ${Message.guild.name}, User: ${Message.author.username}, Code: ${GiftCode}`))
            .catch(x => console.log(`${Chalk.red('[FAILED]')} - Code was invalid.       Server: ${Message.guild.name}, User: ${Message.author.username}, Code: ${GiftCode}`))
        }
    });

    Client.login(Token)
    .then(() => console.log(`${Chalk.greenBright('[TOKEN]')} - Logged in successfully`))
    .catch(err => console.log(`${Chalk.red('[TOKEN]')} - ${err}`))
})