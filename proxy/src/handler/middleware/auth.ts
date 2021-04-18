import express from 'express'
import { verifyIdToken } from '../../infra/admin'
import createError from 'http-errors'

export const authMiddleware = async (req: express.Request, _res: express.Response, next: express.NextFunction) => {
  const authHeaderValue = req.header('Authorization')

  if (authHeaderValue == null) {
    return next((createError(403)))
  }

  const token = authHeaderValue.split(' ')[1]

  try {
    const { uid } = await verifyIdToken(token)
    req.context.uid = uid
    next()
  } catch (err) {
    next((createError(err)))
  }
}
