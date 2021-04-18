import exp from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { sayHello } from '../client/helloClient'
import { authMiddleware } from './middleware/auth'

export const handler = (app: exp.Application) => {

  app.get('/', (_, res) => {
    res.json({ health: "ok" });
  });
  
  app.use(authMiddleware)
  
  app.get<ParamsDictionary, any, any, { name?: string }>('/hello', async (request, response) => {
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

  app.use((err: Error, _req: exp.Request, res: exp.Response, _next: exp.NextFunction) => {
    console.error(err.stack);
    res.status(500).send(err.message);
  });
}