require("dotenv").config();
// SUDO,OWNER (split by comma)
let oo = "917012984396";
//---------------------------
global.owner = oo.split(",");
module.exports = {
  // MUST FI IT
  mongodb: "",// put your mongo db uri
  SESSION_ID: "",// put your session id
  //---------------------------------
  BOT_INFO: "X-BOT-MD;ASWIN SPARKY;https://i.imgur.com/XJ0D4Tq.mp4",
  STICKER_DATA: "X-BOTMD;ASWIN SPARKY",
  MENTION: "true",
  MENTION_DATA: 'X-BOT-MD;MULTI-DEVICE BOT BY TEAM EX-BOT-Z;https://wa.me/917012984396;https://i.imgur.com/3cMVKBk.jpeg',
  MENTION_AUDIO: "https://graph.org/file/1464256c054cd85844659.mp4,https://graph.org/file/9696d880c07fd9557dad7.mp4",
  AUTO_STATUS_VIEW: "true",
  AUTOBIO: "",
  CAPTION: "X-BOT-MD V-2.00",
  TENORAPI: "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c",
  PORT: "9000",
  PREFIX: ".",
};
