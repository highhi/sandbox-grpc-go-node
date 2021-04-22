import { Router } from 'express'
import { authMiddleware } from './middleware/auth'
import { wrap } from './wrap'
import * as client from '../client/task'
import { Request } from 'express-serve-static-core'
import { GetTaskListReply, GetTaskReply, Task } from 'src/protobuf/tasks_pb'

export const tasksHandler = Router()

tasksHandler.use(authMiddleware)

tasksHandler.get('/', wrap(async (req, res) => {
  const { tasksList } = await client.getList({ uid: req.context.uid! })
  res.status(200).json({ tasks: tasksList })
}))

tasksHandler.get('/:id', wrap(async (req, res) => {
  const task = await fetchTaskById(req)
  res.status(200).json({ task })
}))

tasksHandler.get('/edit/:id', wrap(async (req, res) => {
  const task = await fetchTaskById(req)
  res.status(200).json({ task })
}))

tasksHandler.post('/update/:id', wrap(async (req, res) => {
  const { uid } = req.context
  const { id } = req.params
  const { title, content } = req.body
  await client.update({ title, content, id: Number(id), uid: uid! })
  res.status(200).end()
}))

tasksHandler.post('/create', wrap(async (req, res) => {
  const { uid } = req.context
  const { title, content } = req.body

  await client.create({ uid: uid!, title, content })
  res.status(200).end()
}))

tasksHandler.post('/delete/:id', wrap(async (req, res) => {
  const { uid } = req.context
  const { id } = req.params

  await client.destroy({ uid: uid!, id: Number(id) })
  res.status(200).end()
}))

async function fetchTaskById(req: Request): Promise<Task.AsObject | undefined> {
  const { uid } = req.context
  const { id } = req.params
  const { task } = await client.getById({ uid: uid!, id: Number(id) })
  return task
}

