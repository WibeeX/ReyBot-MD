
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.reply(`❮🪐❯ » 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨 𝙙𝙚 𝑹𝒆𝒚𝑩𝒐𝒕-𝑴𝑫...`)
try {
let d = new Date
let date = d.toLocaleDateString('es', { day: 'numeric', month: 'long', year: 'numeric' })
let database = await fs.readFileSync(`./database.json`)
let creds = await fs.readFileSync(`./NaufraBotSession/creds.json`)
await conn.reply(m.sender, `*• FECHA:* ${date}`, fkontak)
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m })
await conn.sendMessage(m.sender, {document: creds, mimetype: 'application/json', fileName: `creds.json`}, { quoted: m })
} catch (e) {
await m.reply(errorAB)
console.log(`❮✅❯ » 𝙃𝙪𝙗𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙖𝙡 𝙚𝙣𝙫𝙞𝙖𝙧 𝙡𝙖 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨, 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙡𝙤 𝙙𝙚 𝙢𝙪𝙚𝙫𝙤.`)
console.log(e)}}

handler.command = /^(backup|respaldo|copia)$/i
handler.owner = true

export default handler
