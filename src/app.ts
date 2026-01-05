const express = require('express') 
// import { notesRouter } from './routes/notes.routes'

function createApp() {
  const app = express()

  app.use(express.json())
//   app.use('/notes', notesRouter)

  return app
}

module.exports = createApp