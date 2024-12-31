const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "False" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_49_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDksXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICA2MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxLFxuICAgICAgICA3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDAsXG4gICAgICAgIDc2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxLFxuICAgICAgICA4NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICA4OSxcbiAgICAgICAgODEsXG4gICAgICAgIDczLFxuICAgICAgICA0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDgsXG4gICAgICAgIDM5LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ5LFxuICAgICAgICA0MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICA2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODcsXG4gICAgICAgIDcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJBcGlzeTZVT0kxUWVNc2l4SGFhd3l5cFBEdk1HTEJJQ2RiOTBQZVYwNmxFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLd2JhR2RlMlNVdUdSQkVZQTNpUU5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0ZGVjMjk4LWQ4MTMtNDc5Mi1iZjIwLWZmMzA1MTNhZDIyNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDgsXG4gICAgICAyNixcbiAgICAgIDEwNyxcbiAgICAgIDIsXG4gICAgICAyMixcbiAgICAgIDE2NCxcbiAgICAgIDUxLFxuICAgICAgMjE0LFxuICAgICAgMTU5LFxuICAgICAgMyxcbiAgICAgIDk3LFxuICAgICAgMzIsXG4gICAgICAxNzMsXG4gICAgICA3NyxcbiAgICAgIDYxLFxuICAgICAgMjUyLFxuICAgICAgMjUxLFxuICAgICAgMTI5LFxuICAgICAgMixcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDUsXG4gICAgICA1NCxcbiAgICAgIDIxMyxcbiAgICAgIDI0MSxcbiAgICAgIDI1MSxcbiAgICAgIDY2LFxuICAgICAgMTQwLFxuICAgICAgNyxcbiAgICAgIDE0MixcbiAgICAgIDE3MyxcbiAgICAgIDE1MSxcbiAgICAgIDMxLFxuICAgICAgMTYwLFxuICAgICAgNzIsXG4gICAgICAyMixcbiAgICAgIDI0MyxcbiAgICAgIDE1MCxcbiAgICAgIDc5LFxuICAgICAgMjA3LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjJWVFFTVkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzQwOTA2ODc1Nzo4NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcItin2KjZhiDYs9mI2KfYqtuMXCIsXG4gICAgXCJsaWRcIjogXCIzNzUzODA2NDUxOTE3OTo4NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLYkY2OElHRUpyUmlyc0dHRDRnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInpkQm1YTWRTZHRXVTkzVGdna0pHaHVpQWpKSE9acm5lTnUxeUVabU02SG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYWRJcmF0NjBlcmh6MGZENUh5cE5Hd3JsKzFSRDI1V1dacStEYmROaWxpUHpHY0NWZzhDY2M1TGhOb2xkS21qWjNmQ29QQmU0MGxSZHNyWGFBTzZwRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicEVxSUhqNWRMZEtoODA4MjBtYUhrR1d1dDltNVNKL2Q0VElBVjlrdC9JQ1JoME9uZEJPMVl1ZkFlZzRJSFVMUVozUitBTC9jT3pKb2RVcUJEaEpkZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDA5MDY4NzU3Ojg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NTE4OTQzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-6f4284bd-334a-4741-bfe0-bdef9be2d33e",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "gullkhan",
  antilink_values:process.env.ANTILINK_VALUES|| All
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
