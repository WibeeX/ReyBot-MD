
import moment from 'moment-timezone'
  
export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return
  
let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `ʜᴏʟᴀ ʙɪᴇɴᴠᴇɴɪᴅᴏ/ᴀ ᴀ ᴡɪʟʙᴇʀᴛ ᴍᴅ
`, m )


user.pc = new Date * 1
}
