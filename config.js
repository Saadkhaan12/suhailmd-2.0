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
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_47_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDkzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NixcbiAgICAgICAgNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxODYsXG4gICAgICAgIDgwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDc5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTczLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkzLFxuICAgICAgICA0NixcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgODIsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWcnNYeDI3ZWpuYVFFSGoxOE0xd095SS82bjJkeVBhZUhOalJ5WS9sVnM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJXTDhQR3RDWVFjeUs3dk1YcVpLS3lRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVkNjI2ODVmLTRkMmQtNDRjNy05ZTM3LTg2NTljY2I5MWYwZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjIsXG4gICAgICA1MixcbiAgICAgIDEwNixcbiAgICAgIDg1LFxuICAgICAgNzQsXG4gICAgICAxMjQsXG4gICAgICAxMjYsXG4gICAgICA3OCxcbiAgICAgIDIyNyxcbiAgICAgIDQwLFxuICAgICAgNjMsXG4gICAgICAxMjUsXG4gICAgICAxMzUsXG4gICAgICAxNTQsXG4gICAgICA0NyxcbiAgICAgIDExMSxcbiAgICAgIDE1MyxcbiAgICAgIDE0OSxcbiAgICAgIDQ5LFxuICAgICAgMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUsXG4gICAgICAxMDUsXG4gICAgICAyMDQsXG4gICAgICAyMyxcbiAgICAgIDEwMCxcbiAgICAgIDE2OSxcbiAgICAgIDI0LFxuICAgICAgMTQyLFxuICAgICAgMTMwLFxuICAgICAgNTQsXG4gICAgICA4MyxcbiAgICAgIDEyNyxcbiAgICAgIDQ5LFxuICAgICAgMjcsXG4gICAgICA1MixcbiAgICAgIDI1MixcbiAgICAgIDE2OSxcbiAgICAgIDE2MSxcbiAgICAgIDEyOSxcbiAgICAgIDI1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQTjVMRFRQVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTkxNDYzMjAyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NzMwMTI5MTE1NTQ5NDoxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMMlQ0TlFERU1mb29ib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhmZDhpeE92cS8zZlV4Zmo3M2FqWFBZUk1BVTJpUXZjTSsxYkpBOW1CM2c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzNDUkVEa001Vmk5VTVYcmpDMDJmdTEwMUVXS0MvNUc0akpDZUptRmNETnF0djIxVDhOQWZnWkt5NkthSkdwRC9oeVN3ai8zTW0zMittejhNQ1E1QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS3RLYVA5Y0QzaHh1dGJWaW5QRERleG5HKytlTWpXa1ZHL1ZLUlBFMHdsSnBxOXFYemw3V01lbE9xTmlCSXZHLzdPcnBHZ1BvYXFrSlpqZTFnVVV5Z2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTkxNDYzMjAyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjgwMTYxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-61d1f2d0-2790-48f9-a2ac-45746f7726da",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "kingkhan1",
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
