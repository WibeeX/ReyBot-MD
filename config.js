import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone'

global.owner = [ //OWNERS
["18293733257", 'ReyBot-MD', true], 
["573108625104"],
["34626817680"],
["5493873232221"],
["523142183828"],
["51918534156"],
["527421168105"],
["5491125655633"],
["51929838430"],
["529982464299"],
["51921207166"],
["5491125730852"],
["5491133980551"]]

global.botNumberCode = ''
global.confirmCode = ''


global.suittag = ['5493873232212']
global.mods = []
global.prems = []


global.isdev = [['5493873232212'],
['5493873232221'],
['51929838430']]

global.packname = 'ReyBot-MD'
global.author = 'Wibego'
global.wm = 'ReyBot-MD │ ᵐᵘˡᵗⁱᵇᵒᵗ-ᵒᶠᶜ'
global.wm2 = '𝙉𝘡│ᵇᵒᵗ'
global.naufrago = 'ReyBot-MD│ᴄᴀɴᴀʟ • ʸᵗ'
global.cb = '🅽︎🆉︎︎'

global.vs = '1.8.0'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '✯ Wibego ✯'
global.devnum = '+1 829 373 3257'

global.imgAll = fs.readFileSync('./menu1.jpg')
global.nzMenus = fs.readFileSync('./menu2.jpg')
global.naufraImg = fs.readFileSync('./storage/nz4.jpg')
	
//Imagenes
global.imagen1 = 'https://i.postimg.cc/tC0JgJFm/Dise-o-sin-t-tulo.jpg'
global.imagen2 = fs.readFileSync('./menu2.jpg')
global.imagen3 = fs.readFileSync('./menu3.jpg')
global.imagen4 = fs.readFileSync('./imagenes/wilbert1.jpg')
global.imagen5 = fs.readFileSync('./imagenes/wilbert2.jpg')
global.imagen6 = fs.readFileSync('./imagenes/wilbert3.jpg')
global.imagen7 = fs.readFileSync('./imagenes/wilbert4.jpg')
global.imagen8 = fs.readFileSync('./imagenes/wilbert5.jpg')
global.imagen9 = fs.readFileSync('./imagenes/wilbert6.jpg')
global.imagen10 = fs.readFileSync('./imagenes/wilbert7.jpg')
global.imagen11 = fs.readFileSync('./imagenes/wilbert8.jpg')
global.imagen12 = fs.readFileSync('./imagenes/wilbert9.jpg')
global.imagen13 = fs.readFileSync('./imagenes/wilbert10.jpg')
global.imagen14 = fs.readFileSync('./imagenes/wilbert11.jpg')
global.imagen15 = fs.readFileSync('./imagenes/wilbert12.jpg')
global.imagen16 = fs.readFileSync('./imagenes/wilbert13.jpg')

global.nzImg1 = fs.readFileSync('./menu1.jpg')
global.nzImg2 = fs.readFileSync('./menu2.jpg')

global.nz1 = fs.readFileSync('./storage/nz.jpg')
global.nz2 = fs.readFileSync('./storage/nz2.jpg')
global.nz3 = fs.readFileSync('./storage/nz3.jpg')
global.nz4 = fs.readFileSync('./storage/nz4.jpg')
global.nz5 = fs.readFileSync('./storage/nz5.jpg')
global.nz6 = fs.readFileSync('./storage/nz6.jpg')

global.img = 'https://i.postimg.cc/Y0xhjXhR/menu2.jpg'
global.img1 = 'https://i.postimg.cc/Y0xhjXhR/menu3.jpg'
global.img2 = 'https://i.postimg.cc/Y0xhjXhR/menu3.jpg'
global.img3 = 'https://i.postimg.cc/Y0xhjXhR/menu4.jpg'
global.img4 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img5 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img6 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img7 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img8 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img9 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.img10 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'

global.iimg1 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.iimg2 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.iimg3 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.iimg4 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'
global.iimg5 = 'https://i.postimg.cc/rshMv7DB/fondo.jpg'

global.yt = 'https://www.youtube.com/results?search_query=memeriard'
global.ig = 'https://www.instagram.com/wibesinho_01/'
global.md = 'https://github.com/WibeeX/ReyBot-MD'
global.git = 'https://github.com/WibeeX/ReyBot-MD'
global.linkwabot = 'https://wa.me/18293733257?text=.menu'
global.email = 'wilbertjmz3@gmail.com'
global.creador = 'https://wa.me/18293733257'
global.asistencia = 'https://wa.me/18293733257?text=Hola'

global.nzVideos = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4']
global.nzAll = ['https://qu.ax/ygwT.mp4', 'https://qu.ax/iFCi.mp4', 'https://qu.ax/jie.mp4', 'https://qu.ax/Pbha.mp4', 'https://qu.ax/bdvm.mp4', iimg1, iimg2, iimg3, iimg4, iimg5]

/*
global.raiz = './'
global.aniD = 'sessions/'
global.dirP = raiz
global.authFile = join(__dirname, `sessions/`)
global.authFileRespald = join(__dirname, `sesionRespaldo/`)
global.temp = join(__dirname, 'tmp')
global.media = raiz+'media/'
global.jadibts = join(__dirname, 'jadibts/')
global.raiz = './menu1.jpg'
*/

global.rwait = '⏰'
global.done = '✅'
global.error = '❌'

//Cargando
global.wait = '*5*'
global.waitt = '*20%*'
global.waittt = '*80%*'
global.waitttt = '*99%*'
global.waittttt = '*100%*'

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
global.wm2 = `${dia} ${fecha}\nReyBot-MD`;
global.gt = 'ReyBot-MD';
global.mysticbot = 'ReyBot-MD';
global.mysticbot = 'https://github.com/WibeeX/ReyBot-MD';
global.nomorown = '18293733257';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu1.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];

//fake
global.fsizedoc = '999999'
global.fpagedoc = '9999'

//Rpg
global.multiplier = 200 // Cuanto más alto, más difícil subir de nivel

global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '🏆', limit: '💎', exp: '✨',
health: '❤️',
money: '💵',
potion: '🥤',
pickaxe: '⛏️' 
}

let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}}

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})

var more = String.fromCharCode(8206)
global.readMore = more.repeat(850)

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
