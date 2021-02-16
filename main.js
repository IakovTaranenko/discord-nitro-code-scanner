const { Client } = require('discord.js');
const ReadLine = require('readline');
const Chalk = require('chalk');
const Axios = require('axios').default;

const client = new Client();

const Console = ReadLine.createInterface({
    input: process.stdin, 
    output: process.stdout
})

Console.question('Token >> ', Token => {
    client.on('ready', () => {
        console.log(`${Chalk.greenBright('[RUNNING]')} - Scanner has started running.`);
    });

    client.on('message', Message => {
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

    client.login(Token)
})