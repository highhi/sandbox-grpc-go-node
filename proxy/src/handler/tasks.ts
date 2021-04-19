import { Router } from 'express'
import { authMiddleware } from './middleware/auth'
import { wrap } from './wrap'
import * as task from '../client/task'

export const tasksHandler = Router()

tasksHandler.use(authMiddleware)

tasksHandler.get('/', wrap(async (req, res) => {
  const { tasksList } = await task.get({ uid: req.context.uid! })
  res.status(200).json({ tasks: tasksList })
}))

tasksHandler.post('/create', wrap(async (req, res) => {
  const { uid } = req.context
  const { title, content } = req.body

  await task.create({ uid: uid!, title, content })
  res.status(200).send()
}))

