const fs = require('fs')
const { Telegraf } = require('telegraf')
const bot = new Telegraf('8084013201:AAHot5yyOT5aoq7fAMZ1HH49sT3QmtrS2EI')
const slugData = JSON.parse(fs.readFileSync('slug55.json', 'utf8'));
const admins = [6279412066]
bot.command("promote", async (ctx) => {
    try {
if(!admins.includes(ctx.from.id)){
return
}
        const chatId = ctx.chat.id;

        // Check if the command is used in a group
        if (ctx.chat.type !== "supergroup" && ctx.chat.type !== "group") {
            return ctx.reply("This command can only be used in groups.");
        }

        const userId = ctx.message.reply_to_message.from.id;
const title = ctx.message.text.split(' ')[1] || 'Admin'
        // Promote the user with all rights including "can_manage_stories"
        await ctx.telegram.promoteChatMember(chatId, userId, {
            can_change_info: true,
            can_post_messages: true,
            can_edit_messages: true,
            can_delete_stories : true,
           can_edit_stories : true,
            can_post_stories:true,
            can_delete_messages: true,
            can_invite_users: true,
            can_restrict_members: true,
            can_pin_messages: true,
            can_promote_members: true,
            can_manage_chat: true,
            can_manage_video_chats: true,
            can_manage_topics: true,
            can_manage_stories: true // Grants rights to manage stories
        });

await ctx.telegram.setChatAdministratorCustomTitle(chatId,userId,title)
        ctx.replyWithMarkdown(
            `User [${userId}](tg://user?id=${userId}) is now an **administrator** 🛡️ with full rights.`
        );

    } catch (error) {
        console.error(error);
        ctx.reply("Failed to promote the user. Make sure I have permission to promote members.");
    }
});

// Listen for /start command
bot.start((ctx) => {
    const welcomeMessage = Welcome, ${ctx.from.first_name}! I am a Slugdex bot. i can give you details of slugs.;
    
    // Send the welcome message to the user
    ctx.reply(welcomeMessage);
});






const effects = {
"Flying": {                                                                        
"Fire": 1,                                                                       
"Electric": 0,                                                                   
"Plant": 2.0,                                                                    
"Earth": 0,                                                                      
"Water": 0.3,                                                                    
"Ice": 0,                                                                        
"Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 0,
    "Metal": 0.5
  },
  "Fire": {
    "Fire": 0.5,
    "Electric": 1.0,
    "Plant": 2.0,
    "Earth": 0.5,
    "Water": 0.3,
    "Ice": 1.5,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 0.7,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 0.5
  },
  "Electric": {
    "Fire": 1.0,
    "Water": 1.0,
    "Plant": 1.3,
    "Earth": 1.0,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 0.3,
    "Wind": 1.0,
    "Poison": 1.3,
    "Ghost": 1.0,
    "Metal": 0.7
  },
  "Plant": {
    "Fire": 0.7,
    "Water": 1.0,
    "Electric": 1.0,
    "Earth": 1.0,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 2.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Earth": {
    "Fire": 1.3,
    "Water": 2.0,
    "Electric": 0.7,
    "Plant": 1.0,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 0.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.5
  },
  "Water": {
    "Fire": 2.0,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.5,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Ice": {
    "Fire": 0.5,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.3,
    "Water": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 2.0,
    "Steel": 0.5,
    "Wind": 1.0,
    "Poison": 1.3,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Psychic": {
    "Fire": 1.0,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.0,
    "Dark": 1.5,
    "Light": 1.5,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Dark": {
    "Fire": 1.0,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.0,
    "Psychic": 1.5,
    "Light": 1.7,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Light": {
    "Fire": 1.0,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.0,
    "Psychic": 1.5,
    "Dark": 1.5,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Air": {
    "Fire": 1.0,
    "Electric": 0.5,
    "Plant": 2.0,
    "Earth": 0.3,
    "Water": 1.0,
    "Ice": 0.5,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Poison": {
    "Fire": 1.0,
    "Electric": 1.3,
    "Plant": 1.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.3,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.3,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Wind": {
    "Fire": 1.0,
    "Electric": 1.0,
    "Plant": 2.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 1.0,
    "Steel": 0.5,
    "Poison": 1.3,
    "Ghost": 1.0,
    "Metal": 1.0
  },
  "Ghost": {
    "Fire": 1.0,
    "Electric": 1.0,
    "Plant": 1.0,
    "Earth": 1.0,
    "Water": 1.0,
    "Ice": 1.0,
    "Psychic": 1.5,
    "Dark": 0.5,
    "Light": 1.7,
    "Air": 1.0,
    "Steel": 1.0,
    "Wind": 1.0,
    "Poison": 1.0,
    "Metal": 1.0
  },
  "Metal": {
    "Fire": 0.5,
    "Electric": 0.7,
    "Plant": 1.0,
    "Earth": 1.5,
    "Water": 1.0,
    "Ice": 1.0,
    "Psychic": 1.0,
    "Dark": 1.0,
    "Light": 1.0,
    "Air": 0.0,
    "Steel": 0.3,
    "Wind": 1.0,
    "Poison": 1.3,
    "Ghost": 1.0,
    "Metal": 1.0
  }
};

const symbols = {
  Fire: '🔥',
  Water: '💧',
  Electric: '⚡',                                                                  
  Plant: '🌿',                                                                     
  Air: '🌬️',                                                                        
  Earth: '🌍',
  Ice: '❄️',
  Light: '☀️',
  Wind: '🌪️',
  Psychic: '🧠',
  Unknown:'👽',
  Dark: '🌑',
  Ghost: '👁‍🗨',
  Metal: '🏗️',
  Poison:'🦠',
  Flying:'🪽',
}
bot.command('slug_list',async ctx => {
let msg = '*Here Is List Of All Common Slugs :*\n\n'
let b = 1
for(const slug of slugData.slugs){
msg += '*'+b+'.* `'+slug.name+'`\n'                                           
b++
}
ctx.reply(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Ghouls',callback_data:'ghouls'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})

bot.action('common',async ctx => {
let msg = '*Here Is List Of All Common Slugs :*\n\n'
let b = 1
for(const slug of slugData.slugs){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Ghouls',callback_data:'ghouls'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('rare',async ctx => {                                          
let msg = '*Here Is List Of All Rare Slugs :*\n\n'                        
let b = 1
for(const slug of slugData.rare){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++                                                                         
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Common',callback_data:'common'},{text:'Boss',callback_data:'boss'}],
[{text:'Ghouls',callback_data:'ghouls'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('boss',async ctx => {                                          
let msg = '*Here Is List Of All Boss Slugs :*\n\n'                        
let b = 1
for(const slug of slugData.boss){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++                                                                         
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Common',callback_data:'common'}],
[{text:'Ghouls',callback_data:'ghouls'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('ghouls',async ctx => {                                          
let msg = '*Here Is List Of All Ghoul Slugs :*\n\n'                        
let b = 1
for(const slug of slugData.ghouls){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++                                                                         
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('epic',async ctx => {
let msg = '*Here Is List Of All Epic (Artificial) Slugs :*\n\n'
let b = 1
for(const slug of slugData.epic){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Morph Stones',callback_data:'morph'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Ghoul',callback_data:'ghouls'}]]}})
})
bot.action('morph',async ctx => {
let msg = '*Here Is List Of All Morph Stones :*\n\n'                              
let b = 1
for(const slug of slugData.morph){
msg += '*'+b+'.* `'+slug.Stone+'`\n'                                              
b++                                                                              }
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[                                                  
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Ghouls',callback_data:'ghouls'}],
[{text:'Elemental',callback_data:'element'},{text:'Baby Slug',callback_data:'baby'}],[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('element',async ctx => {
let msg = '*Here Is List Of All Elemental Slugs :*\n\n'
let b = 1
for(const slug of slugData.elemental){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++                                                                              
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Ghouls',callback_data:'ghouls'}],
[{text:'Morph Stone',callback_data:'morph'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('baby',async ctx => {
let msg = '*Here Is List Of All Baby Slugs :*\n\n'
let b = 1
for(const slug of slugData.baby){
msg += '*'+b+'.* `'+slug.name+'`\n'
b++
}
ctx.editMessageText(msg,{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Ghouls',callback_data:'ghouls'}],
[{text:'Morph Stone',callback_data:'morph'},{text:'Elemental',callback_data:'elemental'}],[{text:'ModS',callback_data:'mods'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.action('mods',async ctx => {
const modsData = slugData.mods
const modList = Object.keys(modsData).map((mod,index) => `*${index+1}.* \`${mod}:\` *${modsData[mod].name}*`).join('\n')
ctx.editMessageText('*Here Is The ModS Data :-*\n\n'+modList+'',{parse_mode:'markdown',
reply_markup:{inline_keyboard:[
[{text:'Rare',callback_data:'rare'},{text:'Boss',callback_data:'boss'}],
[{text:'Common',callback_data:'common'},{text:'Ghouls',callback_data:'ghouls'}],
[{text:'Morph Stone',callback_data:'morph'},{text:'Baby Slug',callback_data:'baby'}],
[{text:'Elemental',callback_data:'element'},{text:'Epic',callback_data:'epic'}]]}})
})
bot.command(/mods_/, (ctx) => {
  const modNumber = ctx.message.text.split('_')[1]
  const modKey = `ModS_${modNumber}`;
const modsData = slugData.mods
  if (modsData[modKey]) {
    const modDetails = modsData[modKey];
    ctx.replyWithMarkdown(`*ModS ${modNumber}*\n\`${modDetails.name}\` (${modDetails.type} ${symbols[modDetails.type]})\n*Damage:* \`${modDetails.damage}\``);
  }else{
ctx.replyWithMarkdown('*Not Found* `'+modKey+'`')
}
});
bot.command('type',async ctx => {
const commandArgs = ctx.message.text.split(' ');
  if (commandArgs.length < 2) {
    ctx.replyWithMarkdown('*Please provide a type after the command, e.g., /type Fire*');
    return;
  }
  const type = commandArgs[1].charAt(0).toUpperCase() + commandArgs[1].slice(1).toLowerCase(); // Capitalize first letter and lowercase the rest
if(!effects[type]){
ctx.replyWithMarkdown('*Type Not Found*')
return
}
let msg = '*Type Effects For* `'+type+'`:-\n'
for (const targetType in effects[type]) {
      msg += `\n*${targetType}:* \`${effects[type][targetType]}x\``;
    }
ctx.replyWithMarkdown(msg,{reply_to_message_id:ctx.message.message_id})
})
bot.command('mega',async ctx => {
const name = ctx.message.text.split(' ').slice(1).join(' ');
  if (!name) {                                                    
ctx.replyWithMarkdown('*Please Tell The Slug / Stone Name Also*');
return;                                                         
}
let d = false
for (const stone of slugData.morph){
if(stone.Name.toLowerCase() == name.toLowerCase() || stone.Stone.toLowerCase() == name.toLowerCase()){
d = stone
}
}
if(!d){
ctx.replyWithMarkdown('*Wrong Name*')
return
}
ctx.replyWithPhoto(d.Link,{caption:'`｢ '+d.Stone+' 」`\n*Evolve From :* `'+d.Name+'`\n\n*Note :* _Mega Morph Increase 50% Attack & Defense Stats In Battles_',parse_mode:'markdown',reply_markup:{inline_keyboard:[[{text:'Transform',callback_data:'megatr_'+d.Stone+''}]]}})
})
bot.action(/megatr_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
let d = false
for (const stone of slugData.morph){                                            
if(stone.Name.toLowerCase() == name.toLowerCase() || stone.Stone.toLowerCase()== name.toLowerCase()){
d = stone
}                                                                                
}
const msg = '`｢ '+d.Stone+' 」`\n*Evolve From :* `'+d.Name+'`\n\n*Note :* _Mega Morph Increase 50% Attack & Defense Stats In Battles_'
ctx.editMessageMedia({
      type: 'photo',
      media: d.Transform
}).then(()=> {
ctx.editMessageCaption(msg,{
parse_mode:'markdown',
reply_markup:{inline_keyboard:[[{text:'Normal',callback_data:'meganr_'+d.Stone+''}]]}
      })
})
})
bot.action(/meganr_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
let d = false
for (const stone of slugData.morph){                                                                                                                   
if(stone.Name.toLowerCase() == name.toLowerCase() || stone.Stone.toLowerCase()== name.toLowerCase()){
d = stone
}
}
const msg = '`｢ '+d.Stone+' 」`\n*Evolve From :* `'+d.Name+'`\n\n*Note :* _Mega Morph Increase 50% Attack & Defense Stats In Battles_'
ctx.editMessageMedia({
      type: 'photo',
      media: d.Link
}).then(()=> {
ctx.editMessageCaption(msg,{
parse_mode:'markdown',
reply_markup:{inline_keyboard:[[{text:'Transform',callback_data:'megatr_'+d.Stone+''}]]}
      })
})
})
bot.command('baby',async ctx => {
const name = ctx.message.text.split(' ').slice(1).join(' ');
  if (!name) {
    ctx.replyWithMarkdown('*Please Tell The Slug Name Also*');
return;
  }
for(const slug of slugData.baby){                                                              
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Baby'
}                                                                                               
}
if(!data){
ctx.replyWithMarkdown('*Wrong Name*')
return
}
if(data.available){
var av = '✅'
}else{
var av = '❌'
}
let moves = ''
let b = 1
for(const move of data.moves){
moves += '*'+b+'.* '+move.name+' *[* '+move.type+' '+symbols[move.type]+' *]*\n*Damage :* `'+move.damage+'` , *Power :* `'+move.power+'`\n'
b++
}
const slug = data
ctx.replyWithPhoto(slug.pic,{caption:'`｢ '+slug.name+' 」`\n\n*Type : [*' + slug.type + ' ' + symbols[slug.type] + '*]*\n*Category :* '+cat+'\n*Available :* '+av+'\n\n*Baby Moves :* \n'+moves+'',parse_mode:'markdown'})
})

bot.command('potions',async ctx => {
let msg = '*Here Is List Of All Potions :-*\n\n'
let b = 1
const key = [[]]
const start = 0
const end = 15
const potions = slugData.potions.slice(start,end)
for(const potion of potions){
msg += '*'+b+'. '+potion.name+' '+potion.emoji+'*\n'
if((b-1)%3==0){
key.push([])
}
key[key.length-1].push({text:b,callback_data:'pot_'+potion.name+'_'+b+''})
b++;
}
key.push([])
if(end < slugData.potions.length){
key[key.length-1].push({text:'Next',callback_data:'nu_2'})
}
ctx.replyWithMarkdown(msg,{reply_to_message_id:ctx.message.message_id,reply_markup:{inline_keyboard:key}})
})
bot.action(/pot_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
const b = ctx.callbackQuery.data.split('_')[2]
const potion = slugData.potions.filter((potion2) => potion2.name === name)[0]
if(!potion){
ctx.answerCbQuery('Cant Find '+name+'')
return
}
ctx.editMessageText('*'+b+'. '+potion.name+'\nEffect :* _'+potion.effect+' '+potion.emoji+'_',{parse_mode:'markdown',reply_markup:{inline_keyboard:[[{text:'Back',callback_data:'nu_1'}]]}})
})
bot.action(/nu_/,async ctx => {
let msg = '*Here Is List Of All Potions :-*\n\n'                      
const key = [[]]
const page = ctx.callbackQuery.data.split('_')[1]*1
const start = (page-1)*15
let b = start+1
const end = start+15
const potions = slugData.potions.slice(start,end)
for(const potion of potions){
msg += '*'+b+'. '+potion.name+' '+potion.emoji+'*\n'
if((b-1)%3==0){
key.push([])
}
key[key.length-1].push({text:b,callback_data:'pot_'+potion.name+'_'+b+''})
b++;
}
key.push([])
if(page > 1){
key[key.length-1].push({text:'Previous',callback_data:'nu_'+(page-1)+''})
}
if(end < slugData.potions.length){
key[key.length-1].push({text:'Next',callback_data:'nu_'+(page+1)+''})
}
ctx.editMessageText(msg,{parse_mode:'markdown',reply_markup:{inline_keyboard:key}})
})


bot.command('characters',async ctx => {
let msg = '*Here Is List Of All Characters*\n\n'
let b = 1
slugData.char = slugData.char.sort((a, b) => parseInt(b.star) - parseInt(a.star));
for(const char of slugData.char){
let star = ''
for (let i = 1; i <= parseInt(char.star); i++) {
star += '✪'
}
msg += '*'+b+'.* `'+char.name+'` '+star+'\n'
b++;
}
ctx.replyWithMarkdown(msg,{reply_to_message_id:ctx.message.message_id})
})

bot.command('cinfo',async ctx => {
const name = ctx.message.text.split(' ').slice(1).join(' ');
  if (!name) {
    ctx.replyWithMarkdown('*Please Tell The Character Name Also*');
return;
  }
for(const slug of slugData.char){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
}
}
if(!data){
ctx.replyWithMarkdown('*Wrong Name*',{reply_to_message_id:ctx.message.message_id})
return
}
let star = ''
for (let i = 1; i <= parseInt(data.star); i++) {
star += '✪'
}
let msg = '*『'+data.name+'』*\n⤷ *Stars : '+star+'*\n\n*『Base Stats』*\n⤷ *HP* : `'+data.base.HP+'`\n⤷ *Attack :* `'+data.base.attack+'`\n⤷ *Defense :* `'+data.base.defense+'`\n⤷ *Speed :* `'+data.base.speed+'`'
ctx.replyWithPhoto(data.imageLink,{caption:msg,reply_to_message_id:ctx.message.message_id,parse_mode:'markdown'})
})
bot.command('data',async ctx => {
const name = ctx.message.text.split(' ').slice(1).join(' ');
  if (!name) {
    ctx.replyWithMarkdown('*Please Tell The Slug Name Also*');
return;
  }
for(const slug of slugData.slugs){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Common'
}
}
for(const slug of slugData.rare){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Rare'
}
}
for(const slug of slugData.boss){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Boss'
}
}
for(const slug of slugData.ghouls){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Ghoul'
}
}
for(const slug of slugData.epic){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Epic'
}
}
for(const slug of slugData.elemental){
if(slug.name.toLowerCase() == name.toLowerCase()){                               
var data = slug
var cat = 'Elemental'
}
}
console.log(cat)
let msg = ''
const slug = data
if(!slug){
ctx.replyWithMarkdown('*Wrong Name*',{reply_to_message_id:ctx.message.message_id})
return
}
  const n = slug.normalMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const s = slug.specialMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const b2 = slug.basicMove
const b = '*1. '+b2.name+' [*'+b2.type+' '+symbols[b2.type]+'*]\nDamage :* '+b2.damage+' , *Power :* '+b2.power+''
const move = '*Basic Move:*\n'+b+'\n*Normal Moves :*\n'+n+'\n*Special :*\n'+s+''
ctx.replyWithPhoto(slug.imageLink,{caption:'`｢ '+slug.name+' 」`\n\n*Type : [*' + slug.type + ' ' + symbols[slug.type] + '*]*\n*Category :* '+cat+'\n\n*Min/Max Stats :-*\n*HP :* `'+slug.baseStats.HP+'-'+(slug.baseStats.HP+25)+'`\n*Attack :* `'+slug.baseStats.attack+'-'+(slug.baseStats.attack+25)+'`\n*Defense :* `'+slug.baseStats.defense+'-'+(slug.baseStats.defense+25)+'`\n*Speed :* `'+slug.baseStats.speed+'-'+(slug.baseStats.speed+25)+'`',parse_mode:'markdown',reply_markup:{inline_keyboard:[[{text:'Moves',callback_data:'moves_'+slug.name+''},{text:'Transform',callback_data:'trans_'+slug.name+''}]]}})
})
bot.action(/trans_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
const rare = slugData.rare
const boss = slugData.boss
const common = slugData.slugs
const sluu = common.concat(rare).concat(boss);
for(const slug of slugData.slugs){
if(slug.name.toLowerCase() == name.toLowerCase()){                               
var data = slug
var cat = 'Common'
}
}
for(const slug of slugData.epic){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Epic'
}
}
for(const slug of slugData.rare){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Rare'
}
}
for(const slug of slugData.boss){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug                                                                  
var cat = 'Boss'                                                                 }                                                                                
}
for(const slug of slugData.ghouls){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Ghoul'
}
}
for(const slug of slugData.elemental){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Elemental'
}
}
const slug = data
const n = slug.normalMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const s = slug.specialMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const b2 = slug.basicMove
const b = '*1. '+b2.name+' [*'+b2.type+' '+symbols[b2.type]+'*]\nDamage :* '+b2.damage+' , *Power :* '+b2.power+''
const move = '*Basic Move:*\n'+b+'\n*Normal Moves :*\n'+n+'\n*Special :*\n'+s+''
var msg = '`｢ '+slug.name+' 」`\n\n*Type : [*' + slug.type + ' ' + symbols[slug.type] + '*]*\n*Category :* '+cat+'\n\n*Max/Min Stats :-*\n*HP :* `'+slug.baseStats.HP+'-'+(slug.baseStats.HP+25)+'`\n*Attack :* `'+slug.baseStats.attack+'`\n*Defense :* `'+slug.baseStats.defense+'`\n*Speed :* `'+slug.baseStats.speed+'`'


ctx.editMessageMedia({
      type: 'photo',
      media: slug.transform
}).then(()=> {
ctx.editMessageCaption(msg,{
parse_mode:'markdown',
reply_markup:{inline_keyboard:[[{text:'Moves',callback_data:'moves_'+name+''},{text:'Normal',callback_data:'normal_'+name+''}]]}
      })
})
})
bot.action(/normal_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
const rare = slugData.rare
const boss = slugData.boss
const common = slugData.slugs
const sluu = common.concat(rare).concat(boss);
for(const slug of slugData.slugs){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Common'
}
}
for(const slug of slugData.rare){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Rare'
}
}
for(const slug of slugData.boss){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Boss'                                                                 
}                                                                     
}
for(const slug of slugData.epic){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Epic'
}
}
for(const slug of slugData.ghouls){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Ghoul'
}
}
for(const slug of slugData.elemental){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Elemental'
}
}
const slug = data
const n = slug.normalMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const s = slug.specialMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*Damage :* '+move.damage+' , *Power :* '+move.power+'').join('\n')
const b2 = slug.basicMove
const b = '*1. '+b2.name+' [*'+b2.type+' '+symbols[b2.type]+'*]\nDamage :* '+b2.damage+' , *Power :* '+b2.power+''
const move = '*Basic Move:*\n'+b+'\n*Normal Moves :*\n'+n+'\n*Special :*\n'+s+''
var msg = '`｢ '+slug.name+' 」`\n\n*Type : [*' + slug.type + ' ' + symbols[slug.type] + '*]*\n*Category :* '+cat+'\n\n*Min/Max Stats :-*\n*HP :* `'+slug.baseStats.HP+'-'+(slug.baseStats.HP+25)+'`\n*Attack :* `'+slug.baseStats.attack+'-'+(slug.baseStats.attack+25)+'`\n*Defense :* `'+slug.baseStats.defense+'-'+(slug.baseStats.defense+25)+'`\n*Speed :* `'+slug.baseStats.speed+'-'+(slug.baseStats.speed+25)+'`'


ctx.editMessageMedia({
      type: 'photo',
      media: slug.imageLink
}).then(()=> {
ctx.editMessageCaption(msg,{
parse_mode:'markdown',
reply_markup:{inline_keyboard:[[{text:'Moves',callback_data:'moves_'+name+''},{text:'Transform',callback_data:'trans_'+name+''}]]}
      })
})
})
bot.action(/moves_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]
const rare = slugData.rare
const boss = slugData.boss
const common = slugData.slugs                                                                             
const sluu = common.concat(rare).concat(boss);
for(const slug of slugData.slugs){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Common'
}
}
for(const slug of slugData.rare){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Rare'                                                                                    
}
}                                                                         
for(const slug of slugData.boss){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug                                                                                           
var cat = 'Boss'
}
}                                                                                                         
for(const slug of slugData.ghouls){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Ghoul'
}
}
for(const slug of slugData.elemental){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Elemental'
}
}
for(const slug of slugData.epic){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Epic'
}
}
const slug = data
const n = slug.normalMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*DMG :* '+move.damage+' , *Power :* '+move.power+' , *EXP :* '+move.expRequired+'').join('\n')
const s = slug.specialMoves.map((move,index) => '*'+(index+1)+'.* *'+move.name+' [*'+move.type+' '+symbols[move.type]+'*]*\n*DMG :* '+move.damage+' , *Power :* '+move.power+' , *EXP :* '+move.expRequired+'').join('\n')
const b2 = slug.basicMove
const b = '*1. '+b2.name+' [*'+b2.type+' '+symbols[b2.type]+'*]\nDMG :* '+b2.damage+' , *Power :* '+b2.power+' , *EXP :* '+b2.expRequired+''
const move = '*Basic Move:*\n'+b+'\n\n*Normal Moves :*\n'+n+'\n\n*Special :*\n'+s+''
ctx.editMessageCaption(move,{parse_mode:'markdown',reply_markup:{inline_keyboard:[[{text:'Basic Info',callback_data:'info_'+name+''}]]}})
})
bot.action(/info_/,async ctx => {
const name = ctx.callbackQuery.data.split('_')[1]                                                                                                      
const rare = slugData.rare
const boss = slugData.boss
const common = slugData.slugs
const sluu = common.concat(rare).concat(boss);
for(const slug of slugData.slugs){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Common'
}
}
for(const slug of slugData.rare){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Rare'
}
}
for(const slug of slugData.boss){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Boss'
}
}
for(const slug of slugData.epic){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Epic'
}
}
for(const slug of slugData.ghouls){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Ghoul'
}
}
for(const slug of slugData.elemental){
if(slug.name.toLowerCase() == name.toLowerCase()){
var data = slug
var cat = 'Elemental'
}
}
const slug = data

ctx.editMessageCaption('`｢ '+slug.name+' 」`\n\n*Type : [*' + slug.type + ' ' + symbols[slug.type] + '*]*\n*Category :* '+cat+'\n\n*Min/Max Stats :-*\n*HP :* `'+slug.baseStats.HP+'-'+(slug.baseStats.HP+25)+'`\n*Attack :* `'+slug.baseStats.attack+'-'+(slug.baseStats.attack+25)+'`\n*Defense :* `'+slug.baseStats.defense+'-'+(slug.baseStats.defense+25)+'`\n*Speed :* `'+slug.baseStats.speed+'-'+(slug.baseStats.speed+25)+'`',{parse_mode:'markdown',reply_markup:{inline_keyboard:[[{text:'Moves',callback_data:'moves_'+slug.name+''},{text:'Transform',callback_data:'trans_'+slug.name+''}]]}})
})
bot.command('set', async ctx => {
  if (![5629395738,7946913230].includes(ctx.from.id)) {
    return;
  }

  const part = ctx.message.text.split(' ');

  if (part.length < 3) {
    ctx.replyWithMarkdown('format: /set <link> <name>');
    return;
  }

  const link = part[1];
  const name = ctx.message.text.split(' ').slice(2).join(' ');

  const slugs = slugData;

for (const category of ['slugs', 'rare', 'ghouls', 'elemental', 'boss']) {
    for (const slug of slugs[category]) {
    if (slug.name.toLowerCase() === name.toLowerCase()) {
      slug.imageLink = link; // Update the image link
      await fs.writeFileSync('./slug55.json', JSON.stringify(slugs, null, 2));
      ctx.reply('done');
      return;
    }
  }
}
  ctx.replyWithMarkdown('*Wrong name*');
});

bot.command('add_char',async ctx => {
if(![5936952759,7946913230,5629395738].includes(ctx.from.id)){
return
}
const morphs = slugData
const parts = ctx.message.text.split(' ')
const name = parts.slice(3).join(' ')
//const stone = parts[2]
const link = parts[1]
const star = parts[2]
if(parts.length < 3){
ctx.replyWithMarkdown('*Give All Values*')
return
}
if(star==3){
var max = 7
var min = 1
}else if(star==4){
var max = 13
var min = 6
}else if(star==5){
var max = 18
var min = 12
}else if(star==6){
var max = 25
var min = 17
}
if(!min){
ctx.replyWithMarkdown('*Wrong Star Count*')
return
}
const stats = {
"HP": getRandomValue(max,min),
"attack":getRandomValue(max,min),
"defense":getRandomValue(max,min),
"speed":getRandomValue(max,min)
}
let newm = {
"name":name,
"imageLink":link,
"star":star,
"base":stats
}
morphs.char.push(newm)
await fs.writeFileSync('./slug55.json', JSON.stringify(morphs, null, 2));
ctx.replyWithMarkdown('*Added New Character* `'+name+'`')
})

bot.command('add_morph',async ctx => {
if(![7946913230].includes(ctx.from.id)){
return
}
const morphs = slugData
const parts = ctx.message.text.split(' ')
const name = parts[1]
const stone = parts[2]
const link = parts[3]
const transform = parts[4]
if(parts.length != 5){
ctx.replyWithMarkdown('*Give All Values*')
return
}
let newm = {
"Link":link,
"Transform":transform,
"Name":name,
"Stone":stone
}
morphs.morph.push(newm)
await fs.writeFileSync('./slug55.json', JSON.stringify(morphs, null, 2));
ctx.replyWithMarkdown('*Added New Morph* `'+stone+'`')
})

bot.command('restart_slugterra',async ctx => {
if(ctx.from.id == 2050530620 || ctx.from.id == 7946913230){
exec('pm2 restart 17', (error, stdout, stderr) => {
      if (error) {
        ctx.reply('Error: ' + error.message);
        return;
      }
if (stderr) {
        ctx.reply('Error: ' + stderr);
        return;
      }
      ctx.replyWithMarkdown('*Restarted*',{reply_to_message_id:ctx.message.message_id});
    });
}
})
function getRandomValue(value,min) {
  return Math.floor(Math.random() * value) + min;
}
bot.launch();
console.log(effects['Earth']['Air'])
