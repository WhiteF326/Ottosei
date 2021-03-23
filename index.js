const Discord = require("discord.js");
const client = new Discord.Client();
const cron = require("node-cron");

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`);

  // 時報追加

  cron.schedule("0 0 * * * *", () => {
    
  });

})

client.on('message', async msg => {
  if (msg.author.bot) {
    //自身の発言を無視する
    return;
  }

  if(msg.content.startsWith("!p")){
    let v = msg.content.split(" ");
    if(v[1] == "オットセイ"){
      msg.channel.send("おうおうおうおうおっうおうおっｗｗｗｗｗｗｗｗパンッパァンッパァンッ(ヒレを叩く音)おうっおうおっおうおうおうおｗｗｗｗおうっっおうおうおうおうおっｗｗｗｗｗｗｗｗパァンッパァンッ(ヒレを叩く音)おうおうおうおっっｗｗｗｗおうおうっおうっおうっｗｗｗおうおうおうおっｗｗｗうおっｗ");
    }
  }
  
})

client.login("ODIzOTA0MDc0NDAzMDIwODQw.YFnmdg.cyqt3f04E8RlvYcLGLhxv0eZhXw");