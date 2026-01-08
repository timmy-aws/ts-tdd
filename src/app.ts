const express = require('express') 
// import { notesRouter } from './routes/notes.routes'

function createApp() {
  const app = express()

  app.use(express.json())
//   app.use('/notes', notesRouter)

app.get('/', (req: any, res: any) => {
  res.send('Hello World!!')
})

  return app
}



module.exports = createApp