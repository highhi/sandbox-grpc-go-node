import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import compression from 'compression'
import helmet from 'helmet'
import { handler } from '../handler'
import { context } from '../handler/middleware/context'
// import * as context from '../handler/middleware/context'

export const runServer = () => {
  const app = express();
  app.use(context)
  app.use(logger('dev'))
  app.use(helmet())
  app.use(compression())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(cors({
    origin: ['http://localhost:3000']
  }))
  
  handler(app)
  
  app.listen('9000', () => console.log(`Express server listening on port 9000`))
}


