const axios = require("axios");
const fetch = require("node-fetch")
const X = require('../config');
let mergedCommands = [
  "song",
        "insta",
        "yt360",
        "yt720",
        "gdrive",
        "apk",
        "mediafire",
        "xdl",
        "spotify",
];

module.exports = {
  name: "downloader",
  alias: [...mergedCommands],
  uniquecommands: ["song","insta","gdrive","apk","mediafire","yt360","yt720","xdl","spotify"],
  description: "All file dowloader commands",
  start: async (Xbot, m, { inputCMD, text, doReact, prefix, pushName }) => {
    switch (inputCMD) {
//song------------------------------------------------------------------------------------------------
        case "song" :
           if (!text)return m.reply(`*_Need text_*`)
       await doReact("🔅") 
        const res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${text}`)
        let response = await res.data
        const aud = await (await fetch(`${response.data.downloadUrl}`)).buffer()
        m.reply(`_*Downloading ${response.data.title}*_`)

      Xbot.sendMessage(m.from , {audio : aud , mimetype : 'audio/mpeg'} , { quoted : m })
        await doReact("🎶")
        break
// INSTA----------------------------------------------------------------------------------------------
        case 'insta': case  'instagram' : 
        if (!text)return m.reply(`*_Need instagram post url!_*`)
        await doReact("🔪") 
        var ig = await fetch(`https://vihangayt.me/download/instagram?url=${text}`);
        var igdl = await ig.json();
        //let type = igdl.data.data[0].type === "video" ? "image" 
        if (igdl.data.data[0].type == "video"){
        Xbot.sendMessage(m.from, { video : { url: igdl.data.data[0].url }, caption:X.CAPTION}, {quoted: m })
        }
              if (igdl.data.data[0].type == "image"){
        Xbot.sendMessage(m.from, { image : { url: igdl.data.data[0].url }, caption:X.CAPTION}, {quoted: m })
              }

              break

   }}}    
