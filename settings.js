//base by andy_mr_lit
//re-upload? recode? copy code? give credit bro :)
//YouTube: @Mrlit

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: andymd" //ur yt chanel name
global.socialm = "GitHub: andymrlit" //ur github or insta name
global.location = "Haïti, USA" //ur location

//new
global.botname = 'AMIR MD BOT' //ur bot name
global.ownernumber = '923456664855' //ur owner number
global.ownername = '🍁🎶 AMIR_MAHI🔱' //ur owner name
global.websitex = "https://www.youtube.com/@andymd"
global.wagc = "https://chat.whatsapp.com/Cf1q8yZsEMlIfrZkCeHeQH"
global.themeemoji = '♥️'
global.wm = "XKY Bot Inc."
global.ram_usage = 900000000
global.botscript = 'https://github.com/andymrlit/XKYV2' //script link
global.packname = "AMIRMAHI"
global.author = "03456664855"
global.creator = "17862755061@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["17862755061"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v3' // evite chnje sa
global.typereply = 'v1' // pa change sa pou pa bay ere
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '62' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'THANKS FOR USING XKY BOT!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
