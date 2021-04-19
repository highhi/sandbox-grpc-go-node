import { Request, Router, Response } from 'express'
import { authMiddleware } from './middleware/auth'
import { wrap } from './wrap'
import * as task from '../client/task'
import { ParamsDictionary } from 'express-serve-static-core'

type Req = Request<ParamsDictionary, any, { title: string; content: string }, any>

export const tasksHandler = Router()

tasksHandler.use(authMiddleware)

tasksHandler.post('/create', wrap(async (req: Req, res: Response) => {
  const { uid } = req.context
  const { title, content } = req.body

  await task.create({ uid: uid!, title, content })
  res.status(200).send()
}))

