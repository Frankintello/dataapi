const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const port = 4343

db.defaults({ news: [] })
  .write()

app.get('/', (req, res) => {
  res.send('DataAPI Version 1.0')
})

app.get('/news/get', (req, res) => {
   const hehe = db.get('news')
   res.send(hehe)
})

app.post('/news/post', (req, res) => {
  res.send('OK')
  const nom = req.body.articlename
  const contenu = req.body.contenu
  db.get('news')
  .push({ nom: nom, contenu: contenu})
  .write()
})

app.listen(port, () => {
  console.log(`En ligne !`)
})
