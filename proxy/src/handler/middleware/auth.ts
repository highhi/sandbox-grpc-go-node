import { Request, NextFunction } from 'express-serve-static-core'
import { verifyIdToken } from '../../infra/admin'
import createError from 'http-errors'
import { wrap } from '../wrap'

export const authMiddleware = wrap(async (req: Request, _res: any, next: NextFunction) => {
  const authHeaderValue = req.header('Authorization')

  if (!authHeaderValue) {
    return next((createError(403)))
  }

  const token = authHeaderValue.split(' ')[1]

  try {
    const { uid } = await verifyIdToken(token)
    req.context.uid = uid
    next()
  } catch (err) {
    if (err.code) return next(createError(403))
    next(err)
  }
})
