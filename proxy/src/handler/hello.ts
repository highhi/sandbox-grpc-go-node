import { Router } from 'express'
import { authMiddleware } from './middleware/auth'
import { wrap } from './wrap'
import { ParamsDictionary } from 'express-serve-static-core'
import { sayHello } from '../client/helloClient'

export const helloHandler = Router()

helloHandler.use(authMiddleware)

helloHandler.get<ParamsDictionary, any, any, { name?: string }>('/', wrap(async (req, res) => {
  const { name } = req.query;
  const result = await sayHello({ name });
  res.status(200).json({ result });
}))

