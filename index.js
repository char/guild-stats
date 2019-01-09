const Discord = require("discord.js");
const client = new Discord.Client();

let rolemap = new Map();
const args = process.argv.splice(2);

client.on("message", msg => {
  if (msg.content === "!printroles") {
    msg.guild.members.forEach(member => {
      member.roles.forEach(role => {
        if (rolemap.has(role.name)) {
          rolemap.set(role.name, rolemap.get(role.name) + 1);
        } else {
          rolemap.set(role.name, 1);
        }
      });
    });
    console.log(JSON.stringify(Array.from(rolemap.entries())));
  }
});

client.login(args[0]);
