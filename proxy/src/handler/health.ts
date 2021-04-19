import { Router } from 'express'
import { wrap } from './wrap'

export const healthHandler = Router()

healthHandler.get('/', wrap(async (_, res) => {
  res.status(200).json({ message: 'ok' });
}))

