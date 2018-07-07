const Discord = require("discord.js");
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
console.log('Sx0lyy Is Here');
client.on('ready', () => {
 console.log(`im ready`);
});
   client.on('message' , message => {
    if (message.content === '&help') {
       message.channel.send(`**The Message Was Sent On Private**`)
       message.author.sendMessage(`**
:sparkles:General Commands | اوامر عامة:sparkles:

★ &roll <number> ⇏ هذه كالقرعة تختار رقم ويكتب البوت رقم 

★ &member ⇏ لمعرفة عدد الاشخاص ، او لمعرفة عدد الاشخاص الاون لاين او الاوف لاين

★ &avatar ⇏ لرؤية أفاتر أو صورة شخص عن طريقة كتابة الامر ومنشن الشخص

★ &id ⇏ لرؤية أيديك أو لرؤية ايديات الاشخاص المتواجدين في السيرفر

★ &date ⇏ لمعرفة التاريخ عبر الامر

★ رابط ⇏ لطلب رابط

★ &say ⇏ لجعل البوت يكتب الكلام الذي كتبتهٌ انت بعد ألامر

★ &ping ⇏ عرض سرعه اتصال البوت

★ &server ⇏ معلومات السيرفر

★ &Dev ⇏ لمعرفة من صنع هذا البوت
**`);
  }
});
client.on('message' , message => {
  if (message.content === '&staffhelp') {
     message.channel.send(`**The Message Was Sent On Private**`)
     message.author.sendMessage(`**
:sparkles:Administrationr Commands | اوامر الاداره:sparkles:

★ &bc ⇏ لارسائل رسالة جماعيه لكل من متواجد في السيرفر.

★ &ban ⇏ لاتبنيد الشخص مع ذكر السبب والدليل ، تحت التجربة حالياً.

★ &kick ⇏ لاطرد الشخص من السيرفر مع ذكر السبب او الدليل

★ &mute ⇏ لاسكات الشخص عن طريق المنشن + ذكر السبب والدليل

★ &unmute ⇏ لافك ألاسكات عن الشخص 

★ &move ⇏ لاسحب الشخص الذي تريده عن طريق المنشن

★ &ct , &cv , &delchannel ⇏ لاصناعة روم كتابي او صوتي ، او حذف روم

★ &clear ⇏ لاحذف عدد من الرسائل من الشات الذي يكتب به هذا الامر

**`);

}
});
var prefix = "&"
client.on('message', function(message) {
  if(message.content.startsWith(prefix + 'roll')) {
    let args = message.content.split(" ").slice(1);
    if (!args[0]) {
      message.channel.send('**حط رقم معين يتم السحب منه**');
      return;
      }
  message.channel.send(Math.floor(Math.random() * args.join(' ')));
      if (!args[0]) {
     message.edit('1')
     return;
    }
  }
});

var prefix = '&'
client.on('message', function(message) {
	const myID = "417357096846360588";
  let args = message.content.split(" ").slice(1).join(" ");
  if(message.content.startsWith(prefix + "setname")) {
		    if(message.author.id !== myID) return;
      if(!args) return message.reply('اكتب الحالة اللي تريدها.');
    client.user.setUsername(args);
    message.channel.send(':white_check_mark: Done!').then(msg => {
      msg.delete(5000);
     message.delete(5000);
    });
  } else if(message.content.startsWith(prefix + "stream")) {
		    if(message.author.id !== myID) return;
      if(!args) return message.reply('اكتب الحالة اللي تريدها.');
    client.user.setGame(args , 'https://www.twitch.tv/n0ThiNG-');
    message.channel.send(':white_check_mark: Done!').then(msg => {
      msg.delete(5000);
     message.delete(5000);
    });
  } else if(message.content.startsWith(prefix + "playing")) {
				    if(message.author.id !== myID) return;
      if(!args) return message.reply('اكتب الحالة اللي تريدها.');
    client.user.setGame(args);
    message.channel.send(':white_check_mark: Done!').then(msg => {
      msg.delete(5000);
     message.delete(5000);
    });
  } else if(message.content.startsWith(prefix + "listen")) {
				    if(message.author.id !== myID) return;
      if(!args) return message.reply('اكتب الحالة اللي تريدها.');
    client.user.setActivity(args, {type:'LISTENING'});
    message.channel.send(':white_check_mark: Done!').then(msg => {
      msg.delete(5000);
     message.delete(5000);
    });
   }
  });
  var prefix = "&";
  client.on("message", message => {
        var args = message.content.substring(prefix.length).split(" ");
        if (message.content.startsWith(prefix + "clear")) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
      var msg;
      msg = parseInt();
     message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
     message.channel.sendMessage("", {embed: {
      title: "Done | تــم مسح الشات",
      color: 000000,
      description: "تم مسح الرسائل ",
      footer: {
       text: "©.Sx0lyy"
      }
     }}).then(msg => {msg.delete(3000)});
               }  
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

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
   });
        client.on('message', message => {
         if (message.content === '&Dev') {
          message.channel.send('By:.Sx0lyy ~');
      
         }
   });
  var prefix = '&';
 client.on('message', message => {
  if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Time Taken:**',msg + " ms :signal_strength: ")
.addField('**WebSocket:**',api + " ms :signal_strength: ")
message.channel.send({embed:embed});
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
   let channel = member.guild.channels.find('name', 'welcome');
   let memberavatar = member.user.avatarURL
    if (!channel) return;
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
client.on('message', message => {
  var prefix = "&"
  if (message.content === prefix + "date") {
      var currentTime = new Date(),
          السنة = currentTime.getFullYear(),
          الشهر = currentTime.getMonth() + 1,
          اليوم = currentTime.getDate();
      message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
  }
});
client.on("message", (message) => {
  if (message.content.startsWith("&ban")) {
   if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ ماعندك الصلاحيات');
    var member= message.mentions.members.first();
    member.ban().then((member) => {
      message.channel.send(member.displayName + " لقد تم تبنيد الشخص:wave: ");
    }).catch(() => {
      message.channel.send(":x: هناك خطاء حاول مره أخرى:x: ");
    });
  }
});
client.on('message', message => {
 var prefix = "&";
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;
 let command = message.content.split(" ")[0];
 command = command.slice(prefix.length);
 let args = message.content.split(" ").slice(1);
 if (command == prefix + "kick") {
   if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You Dont Have **KICK_MEMBERS** Permission!');
    var member= message.mentions.members.first();
    member.kick().then((member) => {
      message.channel.send(member.displayName + " Kicked From " + message.guild.name);
      message.channel.send("By: " + "<@" + message.author.id + ">")
      message.channel.sendMessage(`تم حفظ السبب وستتم مراجعته من قبل الأونر`)
client.channels.get(`ID Chat admin`).sendMessage("** تم طرد هذا الشخص من قبل " + message.guild.owner + " سبب مذكور **" + args.join(" "))
    }).catch(() => {
      message.channel.send(`:x: I cant kick this member`);
    });
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
client.on("message", (message) => {
 if (message.content.startsWith("&ct")) {
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
     let args = message.content.split(" ").slice(1);
   message.guild.createChannel(args.join(' '), 'text');
 message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
 
 }
 });
 
 
 client.on("message", (message) => {
 if (message.content.startsWith("&cv")) {
       if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
     let args = message.content.split(" ").slice(1);
   message.guild.createChannel(args.join(' '), 'voice');
   message.channel.sendMessage('تـم إنـشاء روم صـوتي')
   
 }
 });
 client.on("message", (message) => {
   if (message.content.startsWith('&delchannel')) {
     if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
 
     let args = message.content.split(' ').slice(1);
     let channel = message.client.channels.find('name', args.join(' '));
     if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
     channel.delete()
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
const ms = require("ms");
const fs = require('fs');
var user = {};
var warn = {};
client.on('message', function(message) {
  	 if (!message.channel.guild) return;
let muteRole1 = message.guild.roles.find("name", "Muted");
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
let muteRole1 = message.guild.roles.find("name", "Muted");
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
   .setDescription(`**:small_blue_diamond:لقد قمت بمخالفة قوانين السيرفر**\n \n:gun: : نوع العقوبه\nMuteChat / ميوت كتابي\n:clock1: وقت وتاريخ العقوبه:\n`+ Year + "/" + Month + "/" + Day +', '+hours +'-' +minutes+'-'+seconds+"\n \n \n`في حال كانت العقوبة بالغلط, تواصل مع الادارة`")
     .setFooter("Anti - Spam")
   .setColor("c91616")
   message.author.send(embed20)
 }
});
client.on("message", message => {
  let command = message.content.split(" ")[0];
  if (command === "&mute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
                  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").catch(console.error);
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'Mute-Log'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField(' Mute ', ' | :white_check_mark: |')
    .addField('تم اعطاء الميوت ل', `${user.username}#${user.discriminator} `)
    .addField('السبب', '**تعكير نظام الشات**')
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).roles.has(muteRole.id)) {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed}).catch(console.error);
    });
  }

};
    if (command === "&unmute") {
          if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **");
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'console');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **");
  if (!modlog) return message.reply("**لا يوجد الروم المراد ارسال المعلومات له 'console'**");
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **');
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .addField('UnMute ', ' | :white_check_mark: |')
    .addField('تم فك الميوت عن', `${user.username}#${user.discriminator} `)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   message.channel.send({embed: embed});

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **');

  if (message.guild.member(user).removeRole(muteRole.id)) {
      client.channels.get(modlog.id).send({embed});
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      client.channels.get(modlog.id).send({embed});
    });
  }
};
});
client.on('message', message => {
  if (message.content === 'بروح وبرجع') {
   message.channel.send("Take Your Time");
  }
});
client.on('message', message => {
  if (message.content === 'برب') {
    message.channel.send("Take Your Time");
  }
});
client.on('message', message => {
  if (message.content === 'السلام عليكم') {
    message.channel.send("وعليكم السلام ورحمة الله وبركاتهه ,اهلاً اهلاً");
  }
});
client.on('message', message => {
  if (message.content === 'باك') {
    message.channel.send("**Welcome Back .**");
  }
});
client.on('message', message => {
  if (message.content === 'ترحيب') {
    message.channel.send("**Welcome To ✮ Exprets™ ,:rose::champagne_glass:**");
  }
});

client.login("NDU3OTc0OTc4NTU4Njg5Mjgy.DiG5hw.OfcH9zC03BahPuY0U7eAygP9sy");
