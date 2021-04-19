import { ParamsDictionary, Query, RequestHandler, Request, Response, NextFunction } from 'express-serve-static-core'

type PromiseRequestHandler<P = ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = Query> = {
  (req: Request<P, ResBody, ReqBody, ReqQuery>, res: Response, next: NextFunction): Promise<any>
}

export function wrap<P = ParamsDictionary, ResBody = any, ReqBody = any, ReqQuery = Query>(fn: PromiseRequestHandler<P, ResBody, ReqBody, ReqQuery>): RequestHandler<P, ResBody, ReqBody, ReqQuery> {
  return (req, res, next) => fn(req, res, next).catch(next)
}