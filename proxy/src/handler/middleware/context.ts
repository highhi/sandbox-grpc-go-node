import express from 'express'

export const context = (req: express.Request, _res: express.Response, next: express.NextFunction) => {
  req.context = {}
  next()
}