const { Telegraf } = require('telegraf')
const config = require('config')
const bot = new Telegraf(config.get('token'))

bot.use(Telegraf.log())
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Try to write:/vova, /sanya, /denus, /petya, /vanya, /stepan'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('vova', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/CPJUCpcM9Nv/'))
bot.command('sanya', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/B8zT3jnJm5W/'))
bot.command('denus', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/CBQdeyvgBgq/'))
bot.command('petya', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/CPEw5Aiic4z/'))
bot.command('vanya', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/COxSuBbjoBT/'))
bot.command('stepan', (ctx) => ctx.replyWithPhoto('https://www.instagram.com/p/CJWRDMPsEEY/'))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
