import { Router } from 'express'
import { authMiddleware } from './middleware/auth'
import { wrap } from './wrap'
import * as client from '../client/task'

export const tasksHandler = Router()

tasksHandler.use(authMiddleware)

tasksHandler.get('/', wrap(async (req, res) => {
  const { tasksList } = await client.get({ uid: req.context.uid! })
  res.status(200).json({ tasks: tasksList })
}))

tasksHandler.post('/create', wrap(async (req, res) => {
  const { uid } = req.context
  const { title, content } = req.body

  await client.create({ uid: uid!, title, content })
  res.status(200).send()
}))

tasksHandler.get('/edit/:id', wrap(async (req, res) => {
  const { uid } = req.context
  const { id } = req.params

  const task = await client.getById({ uid: uid!, id: Number(id) })
  res.status(200).send({ task })
}))

