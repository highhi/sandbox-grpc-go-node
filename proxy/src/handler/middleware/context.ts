import { Request, NextFunction } from 'express-serve-static-core'

export const context = (req: Request, _res: any, next: NextFunction) => {
  req.context = {}
  next()
}
