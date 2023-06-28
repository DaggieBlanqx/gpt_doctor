import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import routes from './routes/index.js'

const main = async ({ port }) => {
// const outcome = await ask('headache');
// console.log({outcome});
  const app = express()

  app.use(express.json())
  app.use(express.urlencoded())
  app.use(cors())

  app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`)
    next()
  })

  app.use('/', routes)
  app.use('*', (req, res) => {
    return res.status(400).json({
      status: 'fail'
    })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}`)
  })
}

main({
  port: process.env.APP_PORT || 8152
})
