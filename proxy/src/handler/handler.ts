import { Response, Application } from 'express-serve-static-core'
import { HttpError } from 'http-errors';
import { healthHandler } from './health';
import { helloHandler } from './hello';
import { tasksHandler } from './tasks';

export const handler = (app: Application) => {
  app.use('/health', healthHandler);
  app.use('/hello', helloHandler)
  app.use('/tasks', tasksHandler)

  app.use((_req, res, _next) => {
    res.status(404).send('Sorry cant find that!');
  });

  app.use((err: HttpError, _req: any, res: Response, _next: any) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
  });
}