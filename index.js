const { create } = require('@open-wa/wa-automate');
const express = require("express")
function start(client) {
  client.onGlobalParticipantsChanged(async (event) => {
    const host = (await client.getHostNumber()) + '@c.us';
    if (event.action === 'add' && event.who !== host){
      client.sendTextWithMentions(
        event.chat,
        `✨Hello, Welcome to the group @${event.who.replace(
          '@c.us ✨',
          ''
        )} \n\n✨We are on Chapter 5 \n\n Zoom has to be  installed first! \n\n *Meeting ID* : 2087463769 \n\n *Password* : 12345 \n\n ✨Material pamba singdo hwjik fw tak pada makha da leire \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type 'materials' in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to biology and topics taught on class* ✨ \n _final words: if you want to show this message again, type 'menu'_ `
      );
   client.sendListMessage(
          event.chat,
          [
            {
              title: 'Context Biology',
              rows: [
                {
                  title: 'chapter1',
                  description: 'Reproduction in Organisms',
                  rowId: 'row',
                },
                {
                  title: 'chapter2',
                  description: 'Sexual Reproduction in Flowering Plants',
                  rowId: 'row',
                },
                {
                  title: 'chapter3',
                  description: 'Human Reproduction',
                  rowId: 'row',
                },
                {
                  title: 'chapter4',
                  description: 'Reproductive Health',
                  rowId: 'row',
                },
                {
                  title: 'chapter5',
                  description: 'Principles of Inheritance and Variation',
                  rowId: 'row',
                },
                {
                  title: 'chapter6',
                  description: 'Molecular Basis of Inheritance',
                  rowId: 'row',
                },
                {
                  title: 'chapter7',
                  description: 'Evolution',
                  rowId: 'row',
                },
                {
                  title: 'chapter8',
                  description: 'Human Helath and Disease',
                  rowId: 'row',
                },
                {
                  title: 'chapter9',
                  description: 'Strategies for Enhancement in Food Production',
                  rowId: 'row',
                },
                {
                  title: 'chapter10',
                  description: 'Microbes in Human Welfare',
                  rowId: 'row',
                },
                {
                  title: 'chapte11',
                  description: 'Biotechnology:Principles and Processes',
                  rowId: 'row',
                },
                {
                  title: 'chapter12',
                  description: 'Biotechnology and its Applications',
                  rowId: 'row',
                },
                {
                  title: 'chapter13',
                  description: 'Organisms and Populations',
                  rowId: 'row',
                },
                {
                  title: 'chapter14',
                  description: 'Ecosystem',
                  rowId: 'row',
                },
                {
                  title: 'chapter15',
                  description: 'Biodiversity and Conservation',
                  rowId: 'row',
                },
                {
                  title: 'chapter16',
                  description: 'Environmental Issues',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Sir Loya',
          'CONTEXT'
        );
  client.sendPtt(event.chat, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3');

  }
  });

client.onMessageDeleted(async (message) => {
client.sendText(message.from, 'Humans make mistakes! \n\n So you dont need to delete it ! HEHE');
});




  client.onMessage(async (message) => {
   const command = (message.body || "").toLowerCase();
    
    if (command=="alive?"){
      client.sendText(message.from, " _yes i am alive_");
      
    }
      
 
   if (command.includes("menu")){ 
               await client.reply(message.from, ` ✨We are on Chapter 5 \n\n Zoom has to be  installed first! \n\n *Meeting ID* : 2087463769 \n\n *Password* : 12345 \n\n ✨Material pamba singdo hwjik fw tak pada makha da leire \n\n  /(_in case you messed up, since you are a human_  LOL!)/  \n\n *note* :✨ _if you are using gb or fm or any other unofficial whatsapp, type materials in the chat to show the menu_ ✨ \n\n✨ *Group rules* ✨  \n\n1) Respect everyone here in this group \n\n2) Sharing memes is prohibited \n\n3) Don't send unnecessary messages! \n\n✨ *Feel free to ask and discuss lessons related to biology and topics taught on class* ✨\n  _final words: if you want to show this message again, type 'menu' `, message.id);
  client.sendListMessage(
          message.from,
          [
            {
              title: 'Context Biology',
              rows: [
                {
                  title: 'chapter1',
                  description: '',
                  rowId: 'row',
                },
                {
                  title: 'chapter2',
                  description: 'Sexual Reproduction in Flowering Plants',
                  rowId: 'row',
                },
                {
                  title: 'chapter3',
                  description: 'Human Reproduction',
                  rowId: 'row',
                },
                {
                  title: 'chapter4',
                  description: 'Reproductive Health',
                  rowId: 'row',
                },
                {
                  title: 'chapter5',
                  description: 'Principles of Inheritance and Variation',
                  rowId: 'row',
                },
                {
                  title: 'chapter6',
                  description: 'Molecular Basis of Inheritance',
                  rowId: 'row',
                },
                {
                  title: 'chapter7',
                  description: 'Evolution',
                  rowId: 'row',
                },
                {
                  title: 'chapter8',
                  description: 'Human Helath and Disease',
                  rowId: 'row',
                },
                {
                  title: 'chapter9',
                  description: 'Strategies for Enhancement in Food Production',
                  rowId: 'row',
                },
                {
                  title: 'chapter10',
                  description: 'Microbes in Human Welfare',
                  rowId: 'row',
                },
                {
                  title: 'chapter11',
                  description: 'Biotechnology:Principles and Processes',
                  rowId: 'row',
                },
                {
                  title: 'chapter12',
                  description: 'Biotechnology and its Applications',
                  rowId: 'row',
                },
                {
                  title: 'chapter13',
                  description: 'Organisms and Populations',
                  rowId: 'row',
                },
                {
                  title: 'chapter14',
                  description: 'Ecosystem',
                  rowId: 'row',
                },
                {
                  title: 'chapter15',
                  description: 'Biodiversity and Conservation',
                  rowId: 'row',
                },
                {
                  title: 'chapter16',
                  description: 'Environmental Issues',
                  rowId: 'row',
                },
                
              ],
            },
          ],
          'Materials',
          'by Sir Loya',
          'CONTEXT'
        );
        
      
     client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/instructions_sirloya.mp3');

      }  
      
      if (command.includes("materials")){
        await client.reply(message.from, '  Hello \n\n Dear unofficail whatsapp user ! \n\n Type exactly chapter2 to get *chapter 2* notes \n\n Type exactly chapter3 to get *chapter 3* notes \n\n and so on ', message.id);
      }
       
        
     if (command=="chapter1"){
   client.reply(message.from, "This chapter has been removed and the syllabus for 2021 has not been updated yet!", message.id);
   }
    
     if (command.includes("chapter2")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1X3GNKpA281sByjQpgDwWEw4ebi2-ITmV&export=download' , 'chapter2.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }  
   
   
       
     if (command.includes("chapter3")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1h3BNg0-t7G8kx9X6HqhsMrm2a6RoeXA6&export=download' , 'chapter3.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }
   
   
       
     if (command.includes("chapter4")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1ovSHWBOAJxXivp6WhW6TA9jc1LH9PzKA&export=download' , 'chapter4.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
               client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }
   
   
   
       
     if (command.includes("chapter5")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1dDMC1mDbLe8_USKcGdbY16V48b9P5CCX&export=download' , 'chapter5.pdf', 'check this pdf', null, true)
              client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
        client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }
   
   
   
       
     if (command.includes("chapter6")){
   client.sendFile(message.from, 'https://drive.google.com/uc?id=1nHx_oHLiLACb1JdptYR38Rh-FQvyvKTs&export=download' , 'chapter6.pdf', 'check this pdf', null, true)
               client.reply(message.from,' *sending* ........ it could take 1 or 2mins to send!', message.id);
        client.sendPtt(message.from, 'https://github.com/Sirloya/sirloyav/raw/main/sirloya.mp3');
   }
   
   
   
   
       
     if (command.includes("chapter7")){
   await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
   
       
     if (command.includes("chapter8")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
       
     if (command.includes("chapter9")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
       
     if (command.includes("chapter10")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
       
     if (command.includes("chapter11")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
   
       
     if (command.includes("chapter12")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
   
       
     if (command.includes("chapter13")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
   
       
     if (command.includes("chapter14")){
   await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
       
     if (command.includes("chapter15")){
    await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   
   
       
     if (command.includes("chapter16")){
  await client.reply(message.from, ' *Locked* 🔒 \n\n Will get unlocked when we start the lesson ', message.id);
   }
   
   



    

    try{
    let {body, caption} = message
    const content = caption || body || ''
    const command = content.toLowerCase().split(' ')[0] || ''
    console.log(`Body: ${body}\n\nCaption: ${caption}\n\nContent: ${content}\n\nCommand: ${command}`)
}catch(error){
    console.log(`Error:\n${error}`)
}



  });
}


create({
  licenseKey: "EE0DE51F-F8EB4F44-83289BC8-9B4A53C9",
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  browserRevision: '737027',
}).then((client) => start(client));

const app = express();

app.get('/', (req, res) => res.status(200).send('xd'));
app.listen(process.env.PORT || 80);
