import exp from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { HttpError } from 'http-errors';
import { sayHello } from '../client/helloClient'
import { authMiddleware } from './middleware/auth'

export const handler = (app: exp.Application) => {
  app.get('/', (_, res, next: exp.NextFunction) => {
    res.json({ health: "ok" });
  });

  app.get<ParamsDictionary, any, any, { name?: string }>('/hello', authMiddleware, async (request, response) => {
    const { name } = request.query;

    try {
      const result = await sayHello({ name });
      response.json({ result });
    } catch (error) {
      console.log(error)
      response.status(500).json({ error });
    }
  });

  app.use((_req, res, _next) => {
    res.status(404).send('Sorry cant find that!');
  });

  app.use((err: HttpError, _req: exp.Request, res: exp.Response, _next: exp.NextFunction) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
  });
}