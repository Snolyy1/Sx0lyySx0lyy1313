const moment = require("moment");
const ms = require("ms");
const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.on('ready', () => {
  console.log(`----------------`);
   console.log(`Sx0lyy. BOT STARTED`);
    console.log(`---------------`);
   console.log(`ON ${client.guilds.size} Servers `);
  console.log(`---------------`);
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setGame(` New Bot & New Commands | &help `,"http://twitch.tv/snolyyal7rrrrbi")
  client.user.setStatus("dnd")
});
client.on('message' , message => {
  if (message.content === '&help') {
        message.channel.send('**The Message Was Sent On Private**');
        message.author.sendMessage(`**

✮ &helpgames ⇏ لمعرفة كيف تلعب اللالعاب عبر البوت

✮ &id ⇏ لرؤية الايدي الخاص بك

✮ &member ⇏ لرؤية عدد الممبر المتواجدين او الاوفلاين

✮ &server ⇏ لرؤية معلومات السيرفر

✮ &invites ⇏ لمعرفة كم شخص جبت للسيرفر

✮ &roles ⇏ لرؤية جميع الرتب الموجودة في السيرفر

✮ &sug ⇏ لطرح الاقتراحات والاراء ، وان كان الاقتراح او الرأي للطقطقة سوف يتم معاقبتك

✮ &avatar ⇏ لرؤية اي أفاتر اي شخص بوضع منشنه بعد الامر

✮ رابط ⇏ لطلب رابط خاص بك لمدة يوم كامل وعشرين شخص فقط

        **`)
    }
});
    client.on('message' , message => {
      if (message.content === '&staffhelp') {
            message.channel.send('**The Message Was Sent On Private**');
            message.author.sendMessage(`
    
:sparkles: Administrationr Commands | اوامر الاداره :sparkles:.

✮ &bc ⇏ .لرسائل رسالة جماعيه لكل من متواجد في السيرفر

✮ &ban ⇏ .لاتبنيد الشخص مع ذكر السبب
 
✮ &move ⇏ .لسحب أي شخص للروم الذي متواجد فيهٍ انت

✮ &mute ⇏ .لاساكت شخص

✮ &unmute ⇏ .لفك الاسأكت عن شخص

✮ &warn ⇏ .لتحذير الشخص مع ذكر السبب

✮ &clear ⇏ لمسح إي شات موجود في السيرفر  

           `)
      }
       });
var prefix = "&";
client.on('message', message => {
        if (message.content.startsWith(prefix + "uptime")) {
    let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];

    if (days === 1) {
        dateStrings.push('**1** day');
    } else if (days > 1) {
        dateStrings.push('**' + String(days) + '** days');
    }

    if (hours === 1) {
        dateStrings.push('**1** hour');
    } else if (hours > 1) {
        dateStrings.push('**' + String(hours) + '** hours');
    }

    if (minutes === 1) {
        dateStrings.push('**1** minute');
    } else if (minutes > 1) {
        dateStrings.push('**' + String(minutes) + '** minutes');
    }

    if (seconds === 1) {
        dateStrings.push('**1** second');
    } else if (seconds > 1) {
        dateStrings.push('**' + String(seconds) + '** seconds');
    }

    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    message.channel.send(dateString);
}
});


client.on('ready', () => {
});
let points = JSON.parse(fs.readFileSync('./typePTS.json', 'utf8')); 
var prefix = "&";
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = { 
	points: 0,
  };
if (message.content.startsWith(prefix + 'type')) { 
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
const type = require('./type.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لكتابة الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("&points سرعة كتابة | لرؤية مجموع نقاطك اكتب |", 'https://cdn.discordapp.com/attachments/456827034321289216/459579599442018334/947944964.png')
	.setDescription(`**قم بكتابة : ${item.type}**`) 
	
	msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
		message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الكلمة بالوقت المناسب**`);
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let won = collected.first().author; 

			            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم أحد بكتابة الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
		})
	})
}
});
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'fkk')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fkk.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانية لتفكيك الكلمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("&points سرعة تفكيك الكلمة | لرؤية مجموع نقاطك اكتب |", 'https://cdn.discordapp.com/attachments/456827034321289216/459579599442018334/947944964.png')
	.setDescription(`**قم بتفكيك : ${item.type}**`) 
            
	msg.channel.sendEmbed(embed).then(() => {
		message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
		.then((collected) => {
message.channel.send(`${collected.first().author} ✅ **لقد قمت بتفكيك الكلمة بالوقت المناسب**`);
console.log(`[Typing] ${collected.first().author} typed the word.`);
	let won = collected.first().author; 

							points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم أحد بتفكيك الجملة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
        })
    })
}
});
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith(prefix + 'عواصم')) {
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./lol.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 20 ثانية لمعرفة العاصمة**').then(msg => {
	let embed = new Discord.RichEmbed()
	.setColor('#000000')
	.setFooter("&points سرعة معرفة عاصمة الدولة | لرؤية مجموع نقاطك اكتب ",'https://cdn.discordapp.com/attachments/456827034321289216/459579599442018334/947944964.png')
	.setDescription(`**قم بكتابة عاصمة الدولة : ${item.type}**`) 
            
	msg.channel.sendEmbed(embed).then(() => {
		message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
		.then((collected) => {
message.channel.send(`${collected.first().author} ✅ **لقد قمت بمعرفة عاصمة الدولة بالوقت المناسب**`);
console.log(`[Typing] ${collected.first().author} typed the word.`);
	let won = collected.first().author; 

							points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: **لم يقم احد بمعرفة عاصمة الدولة بالوقت المناسب**`);
			console.log(`[Typing] Error: No one type the word.`);
          })
        })
    })
}
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'points')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
	let userData = points[message.author.id];
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('#000000')
	.setDescription(`نقاطك: \`${userData.points}\``)
	message.channel.sendEmbed(embed)
  }
  fs.writeFile("./typePTS.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })
});
client.on('guildCreate', guild => {
	console.log(`Added to a server by: ${guild.owner.user.username} || Server name: ${guild.name} || Users: ${guild.memberCount}`);
});
client.on('message', message => {
if (message.content.startsWith(prefix + 'helpgames')) {
	if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(300));
	let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
	.setColor('RANDOM')
	.addField("&type","**لبدأ لعبة سرعة الكتابة**")
	.addField("&fkk","**لبدأ لعبة تفكيك الكلمات**")
	.addField("&عواصم","**لبدأ لعبة معرفة العواصم**")
	.addField("&points","**لعرض النقاط الخاصة بك**")
  .addField("**بعض اللالعاب قادمه لكم ، وشكرا**","** **")
	.setFooter("Games-Bot", 'https://cdn.discordapp.com/attachments/456827034321289216/459579599442018334/947944964.png')
	message.channel.sendEmbed(embed).then(m => m.delete(15000));
}
});


            var prefix = "&";
            const devs = ['417357096846360588'];
            client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;
                
            if (message.content.startsWith(prefix + 'setgame')) {
              client.user.setGame(argresult);
                message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
            } else 
              if (message.content.startsWith(prefix + 'setname')) {
            client.user.setUsername(argresult).then
                message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
            return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
            } else
              if (message.content.startsWith(prefix + 'setavatar')) {
            client.user.setAvatar(argresult);
              message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                  } else     
            if (message.content.startsWith(prefix + 'setstream')) {
              client.user.setGame(argresult, "https://www.twitch.tv/idk");
                message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
            }
            
            });
client.on(`ready`, () => console.log(`Ready!`))
const channels = {};
 
client.on('voiceStateUpdate',async function(oldmember, member) {
if(member.user.bot) return;
if(member.voiceChannel === undefined && channels[member.id]) {
console.log(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size)
if(member.guild.members.filter(m => m.voiceChannelID === channels[member.id].channel).size < 1) {
member.guild.channels.get(channels[member.id].channel).delete();
channels[member.id].channel = undefined;
}
}
if(oldmember.voiceChannel !== undefined || member.voiceChannel !== undefined) {
if(member.voiceChannelID === '466398808570593280') {
member.guild.createChannel(member.displayName, "voice", [{
id: member.id,
allow: ['CONNECT'],
}, {
id: member.guild.id,
deny: ['CONNECT']
}]).then((channel)=> {
    const parent = member.guild.channels.get('466398808570593280').parentID
    channel.setParent(parent);
    if(!channels[member.id]) channels[member.id] = {
        channel: channel.id,
        }
member.user.send(`Hey **${member.displayName}** I've created a channel for you!
------------------------------------------------------------
Use \`\`&unlock [@user | all]\`\` to unlock for a specify or for all.
Use \`\`&lock [@user | all]\`\` to lock & kick for a specify or for all in your voice channel.
Use \`\`&rename [new name]\`\` to rename your voice channel name.
------------------------------------------------------------
`)
member.setVoiceChannel(channel.id);
})
} else return undefined;
}
});
var prefix = "&";
client.on(`message`, async message => {
let args = message.content.trim().split(" ").slice(1);
let user = message.mentions.users.first();
if(message.content.startsWith(prefix + "unlock")) {
if(channels[message.author.id] !== undefined) {
if(user) {
if(message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already can connect to your voice channel**\n to lock & kick user use \`\`!lock\`\` `);
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: true
}).then(message.channel.send(`**${user.username}** can connect to your room now!`))
}
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: true
}).then(message.channel.send("**Everyone** can connect to your room now!"));
} else return message.channel.send(`**Usage: &unlock [all | @user]**`)
}
}
if(message.content.startsWith(prefix + "lock")) {
if(channels[message.author.id] !== undefined) {
if(user) {
if(!message.guild.channels.get(channels[message.author.id].channel).permissionsFor(user.id).has(`CONNECT`)) return message.channel.send(`**The user already cannot connect to your voice channel**`);
try {
if(message.guild.members.get(user.id).voiceChannelID === channels[message.author.id].channel) {
message.guild.members.get(user.id).setVoiceChannel('466393856829685770 lock');
}  
} catch (error) {
console.log(error)
}
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(user.id, {
CONNECT: false
}).then(message.channel.send(`:x: **${user.username}** cannot connect to your room now!`))
}
else if(args.includes("all")) {
message.guild.channels.get(channels[message.author.id].channel).overwritePermissions(message.guild.id, {
CONNECT: false
}).then(message.channel.send(":x: **Everyone** cannot connect to your room now!"));
} else return message.channel.send(`**Usage: &lock [all | @user]**`)
}  
}
if(message.content.startsWith(prefix + "rename")) {
if(channels[message.author.id] !== undefined) {
if(args.length <= 0) return message.channel.send(`:scroll: **Hmmm the name please*`);
if(message.content.length > 7+15) return message.channel.send(`:x: It appears that's the max letters allowed is **15**.`)
const oldName = await message.guild.channels.get(channels[message.author.id].channel).name
message.channel.send(`:pencil2: Renamed **\`\`${oldName}\`\`** to **\`\`${args.join(" ").toString()}\`\`** alright?`)
message.guild.channels.get(channels[message.author.id].channel).setName(args.join(" ").toString());
}
 }
});
var prefix = "&";
client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(`ماعندك هذا البرمشن[*Administrator*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✅ تــم مسح الشات ``",
    color: RANDOM,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
var TOKEN = "NDU3OTc0OTc4NTU4Njg5Mjgy.DiG5hw.OfcH9zC03BahPuY0U7eAygP9syY";

client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("464540808901689374").roles.find("name", "◈ Rainbow").edit({
            color : "RANDOM"
        });
    },180)
}).login(TOKEN);
  client.on('message', message => {
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + 'move')) {
     if (message.member.hasPermission("MOVE_MEMBERS")) {
     if (message.mentions.users.size === 0) {
     return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
    }
    if (message.member.voiceChannel != null) {
     if (message.mentions.members.first().voiceChannel != null) {
     var authorchannel = message.member.voiceChannelID;
     var usermentioned = message.mentions.members.first().id;
    var embed = new Discord.RichEmbed()
     .setTitle("Succes!")
     .setColor("#000000")
     .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك:white_check_mark: `)
    var embed = new Discord.RichEmbed()
    .setTitle(`You are Moved in ${message.guild.name}`)
     .setColor("#000000")
    .setDescription(`<@${message.author.id}> moved you to his channel!\nServer => ${message.guild.name}`)
     message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
    message.guild.members.get(usermentioned).send(embed)
    } else {
    message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
    }
    } else {
     message.channel.send("``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``")
    }
    } else {
    message.react("❌")
     }}});
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
 
client.on('guildMemberRemove', (u) => {
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == "MEMBER_KICK") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {  
            time : 1
          };
      } else { 
          data[ss.executor.id].time+=1
      }; 
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : [] 
                });
                data[ss.executor.id].time = 0
            }); 
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) { 
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('roleDelete', (u) => { 
    u.guild.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == "ROLE_DELETE") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                }); 
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('channelDelete', (u) => {
    u.guild.fetchAuditLogs().then( s => { 
        var ss = s.entries.first();
        if (ss.action == "CHANNEL_DELETE") {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1 
      };
data[ss.executor.id].time = 0
u.guild.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({
                    permissions : []
                });
                data[ss.executor.id].time = 0
            });
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {
                data[ss.executor.id].time = 0
            }
        },60000)
    };
    });
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{
        if (err) console.log(err.message);
    });
});
client.on('guildBanAdd', (g , u) => {
    g.fetchAuditLogs().then( s => {
        var ss = s.entries.first();
        if (ss.action == `MEMBER_BAN_ADD`) {
        if (!data[ss.executor.id]) {
            data[ss.executor.id] = {
            time : 1
          };
      } else {
          data[ss.executor.id].time+=1
      };
        if (data[ss.executor.id].time >= 3) {
            g.members.get(ss.executor.id).roles.forEach(r => {
                r.edit({ 
                    permissions : []
                });  
            }); 
        }
        setTimeout(function(){
            if (data[ss.executor.id].time <= 3) {  
                data[ss.executor.id].time = 0
            } 
        },60000)
    }; 
    });      
    fs.writeFile("./data.json", JSON.stringify(data) ,(err) =>{   
        if (err) console.log(err.message);  
    });   
});    

client.on('message', message => {
  var prefix = '&'
var args = message.content.split(" ").slice(1);  
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first(); 
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}
let d = z.createdAt;     
let n = d.toLocaleString();  
let x;            
let y;            
if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField(': 🔱 | اسمك',`**<@` + `${z.id}` + `>**`, true)
.addField(': ♨ | Playing','**'+y+'**' , true)
.addField(': 📛 | تاق حق حسابك',"**#" + `${z.discriminator}**`,true)
.addField('**: 📆 | التاريح الذي انشئ فيه حسابك**', message.author.createdAt.toLocaleString())
.addField("**: ⌚ | تاريخ دخولك للسيرفر**", message.member.joinedAt.toLocaleString())  
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)
message.channel.send({embed});
  if (!message) return message.reply('**ضع المنشن بشكل صحيح ❌ **').catch(console.error);
}
});
var prefix = '&'
client.on('message', message => {
 if (!message.channel.guild) return;
if(message.content == prefix + 'member')
var Sx0 = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL) 
.setTitle('🌷| Members info')
.addBlankField(true)
.addField('📗| Online',
`${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
.addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
.addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
.addField('➡| Server Members',`${message.guild.memberCount}`)
message.channel.send(Sx0);
});
var prefix = "&";
client.on('message', message => {
  if(message.content == prefix + 'server') {
    var servername = message.guild.name
    var اونر = message.guild.owner
    var اعضاء = message.guild.memberCount
    var بلدالسيرفر = message.guild.region
    var الرومات = message.guild.channels.size
    var عمل = message.guild.createdAt
    var الرتب = message.guild.roles.size
    var server = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .addField('اسم السيرفر', servername)
    .addField('أعضاء السيرفر', اعضاء)
    .addField('رومات السيرفر', الرومات)
    .addField("رتب السيرفر",الرتب)
    .addField('صاحب السيرفر', اونر)
    .addField('بلد السيرفر', بلدالسيرفر)
    .addField('تاريخ افتتاح السيرفر', عمل)
    .setColor('#000000')
    message.channel.sendEmbed(server)
  }
   });
   client.on('guildMemberAdd', member => {
   let channel = member.guild.channels.find('name', '✔-welcome');
  let memberavatar = member.user.avatarURL 
   let embed = new Discord.RichEmbed()
     .setColor('RED')
     .setThumbnail(memberavatar)
     .addField(':running_shirt_with_sash: | name : ',`${member}`)
     .addField(':loudspeaker: | حياك الله في سيرفرنا , أطلق من دخل' , `Welcome to the server, ${member}`)
         .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
         .addField("Name:",`<@` + `${member.id}` + `>`, true)     
    .setFooter(`${member.guild.name}`)
     .setTimestamp()
    channel.sendEmbed(embed);
   });
 client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
  let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
 if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
 message.channel.send("**&bc <message>**");
 return;
 }
    message.guild.members.forEach(m => {
  if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField('** الـسيرفر**', `${message.guild.name}`,true)
      .addField(' **الـمرسل **', `${message.author.username}#${message.author.discriminator}`,true)
      .addField(' **الرسالة** ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('#000000')
      m.send(`${m}`,{embed: bc});
    });
    const AziRo = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)  
    .setTitle('✔️ | جاري ارسال رسالتك ') 
    .addBlankField(true)
    .addField('👥 | عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)    
    .addField('📋| الرسالة ', args)
    .setColor('#000000') 
    message.channel.sendEmbed(AziRo);     
  }
  } else {
    return;
  }
 });
 client.on('message', message => {
  if (message.content.startsWith("رابط")) {
    message.channel.createInvite({
    thing: true,
    maxUses: 20,
    maxAge: 86400,
  }).then(invite =>
   message.author.sendMessage(invite.url)
  )
  const embed = new Discord.RichEmbed()
    .setColor("#000000")
     .setDescription("تم أرسال الرابط برسالة خاصة")
      .setAuthor(client.user.username, client.user.avatarURL)
         .setAuthor(client.user.username, client.user.avatarURL)
        .setFooter('طلب بواسطة: ' + message.author.tag)
   message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
       const Embed11 = new Discord.RichEmbed()
    .setColor("#000000") 
  .setDescription("** مدة الرابط : يوم | عدد استخدامات الرابط :20 **")
   message.author.sendEmbed(Embed11)
  }
}); 
var prefix = "&"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
  message.guild.member(user).ban(7, user);
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
  client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', '★-ban-log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
  
client.on('ready', () => {
    console.log(`[BOT] Auto Role `)
});

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find("name", "◈ UnActive"));
});

client.on("message", async function(message)  {
let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith("&voice")){
return message.channel.send(`**In Voice Online 📢 [${message.guild.members.filter(member => member.voiceChannel).size}**]`);
}

client.on('voiceStateUpdate', (member) => {
member.guild.channels.get("464920490687856663").setName(`Voice Online 📢 [${member.guild.members.filter(member => member.voiceChannel).size}]`)
});

  var prefix = "&";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return;
  if(!message.member.hasPermission('VIEW_AUDIT_LOG')) return;
  if (message.mentions.users.size < 1) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  
if (command == "warn") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x831f18)
    message.channel.sendEmbed(say);
    client.channels.get("465791625004843009").send(`**=========================================**`)
    client.channels.get("465791625004843009").send(`**New Warn !**`)
    client.channels.get("465791625004843009").send({embed : say})
    client.channels.get("465791625004843009").send(`**Admin : ${message.author.username}#${message.author.discriminator}**`)
    client.channels.get("465791625004843009").send(`**In Channel : ${message.channel}**`)
    message.delete();
  }
});

client.on('message', message => {
  if (message.content.startsWith ("&invites")) {
   if(!message.channel.guild) return message.reply('** This command only for servers **');
       var mentionned = message.mentions.users.first();
      var os;
    if(mentionned){
        var os = mentionned.id;
    } else {
        var os = message.author.id;
        
    }
        var oss;
    if(mentionned){
        var oss = mentionned;
    } else {
        var oss = message.author;
        
    }
message.guild.fetchInvites()
.then(invites =>{
if(!invites.find(invite => invite.inviter.id === `${os}`)) return message.channel.send(`**${oss.username}, Does't Have Invites :x:**`);
message.channel.send(`**__${invites.find(invite => invite.inviter.id === `${os}`).uses}__ Member Joined By ${oss.username} !** :chart_with_upwards_trend: `)

})



}

});
 var prefix = "&";
  client.on('message', message => {
  if(message.content.startsWith(prefix + 'avatar')) {
     var men = message.mentions.users.first();
   var heg;
   if(men) {
     heg = men
   } else {
     heg = message.author
   }
 var avatar = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)
message.channel.sendEmbed(avatar)
  }
});
client.on('message', message =>{
 var prefix = "&"
 if (message.author.bot) return;
 if(message.content == prefix + "roles"){
   var roles = '',
   ros=message.guild.roles.size,
   role = [];
   for(let i =0;i<ros;i++){
     if(message.guild.roles.array()[i].id !== message.guild.id){
role.push(message.guild.roles.filter(r => r.position == ros-i).map(r => `${i}- ${r.name}`)); 
   }}
   message.channel.send(role.join("\n"));
 }
});
const bannedwords = [
    "انيك امك",
    "انيكك",
    "يلعن امك",
    "يبن القحبة",
    "كس امك",
    "كسمك",
    "كسخواتك",
    "كس خواتك",
    "يلعن ابوك",
    "انيك اختك",
    "يبن الحرام",
    "كس اختك",
    "يبن الشرموطة",
    "امك عندي",
    "اختك عندي",
    "تعال خذ اختك",
    "تعال خذ امك",
    "امك ممحونة",
    "على زبي",
    "تعال شيل امك",
    "يلعن عارك",
    "كس عارك",
    "تعال شيل اختك",
    "يلعن اهلك",
    "تعال مص زبي",
    "مص زبي",
  ];

client.on('message',  message => {
  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply(" احترم نفسك , يمنع الشتم في سيرفرنا او سوف تتعرض الي  ميوت وشكراً").then(msg => {msg.delete(5000)});;
  };
});
  var prefix = "&"
client.on('message', message => {

  if (message.content.startsWith( prefix + "sug")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("466195403931648011").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  }
  });

var user = {};
var warn = {};
client.on('message', function(message) {
  	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "◈ Muted");
   if (!muteRole1) return;
 if (message.author.id == client.user.id) return;
 if(JSON.stringify(user).indexOf(message.author.id) == -1) {
  user[message.author.id] = message.createdTimestamp;
  return;
 } else {
  if (Date.now() - user[message.author.id] < 695){
       message.author.delete
   if (JSON.stringify(warn).indexOf(message.author.id) == -1) {
    warn[message.author.id] = 1;
   } else {
    warn[message.author.id]++;
    message.author.delete
   }
   if (warn[message.author.id] < 4) {
    message.author.delete
   }
   delete user[message.author.id];
       message.author.delete
  } else {
   delete user[message.author.id];
       message.author.delete
  }
 }
 if (warn[message.author.id] == 4) {		  
   if (!message.channel.guild) return;
       message.author.delete
let muteRole1 = message.guild.roles.find("name", "◈ Muted");
   if (!muteRole1) return;
  var guild = message.channel.guild;
     var currentTime = new Date(),
          Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Day = currentTime.getDate(),
hours = currentTime.getHours() + 3 ,
      minutes = currentTime.getMinutes()+1,
      seconds = currentTime.getSeconds();
      if (!message.channel.guild) return;
   if (!muteRole1) return;
  var guild = message.channel.guild;
  message.guild.members.get(message.author.id).addRole(muteRole1);
   var msg;
    msg = parseInt(); 
   message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
delete warn[message.author.id];
  delete user[message.author.id];
	const embed500 = new Discord.RichEmbed()
   .setTitle(`المرسل ${message.author.username}#${message.author.discriminator} `)
   .setDescription(":white_check_mark: | `محاولة السبام`\n\nالاسم:\n"+`${message.author.username}#${message.author.discriminator}`+"\nالعقوبة:\n MuteChat / ميوت كتابي\n")
   .setFooter("مانع-السبام")
   .setColor("c91616")
  message.channel.send(embed500)
  	const embed20 = new Discord.RichEmbed()
   .setTitle(":scales: | تمت معاقبتك")
   .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`")
     .setFooter("Anti - Spam")
   .setColor("c91616")
   message.author.send(embed20)
 }
});
client.on('message', async message =>{
  var prefix = "&";
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "◈ Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "◈ Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "◈ Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});

client.on('message', message => {
  if (message.content === 'بروح وبرجع') {
   message.channel.send("Take Your Time , :rose:");
  }
});
client.on('message', message => {
  if (message.content === 'برب') {
    message.channel.send("Take Your Time , :rose:");
  }
});
client.on('message', message => {
  if (message.content === 'السلام عليكم') {
    message.channel.send("وعليكم السلام ورحمة الله وبركاتهه ,اهلاً اهلاً :rose:");
  }
});
client.on('message', message => {
  if (message.content === 'باك') {
    message.channel.send("**Welcome Back , :rose:**");
  }
});
client.on('message', message => {
  if (message.content === 'ترحيب') {
    message.channel.send("**Welcome To ✮ Experts™ ,:rose::champagne_glass:**");
  }
});
  
}).login("process.env.BOT_TOKEN");
