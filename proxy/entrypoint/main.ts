import express from 'express'
import { ParamsDictionary } from 'express-serve-static-core';
import { sayHello } from '../client/helloClient'

const app = express();

app.get('/', (_, res) => {
  res.json({ health: "ok" });
});

app.get<ParamsDictionary, any, any, { name?: string }>('/hello', async (request, response) => {
    const { name } = request.query;

    try {
      const result = await sayHello({ name });
      response.json({ result });
    } catch (error) {
      console.log(error)
      response.status(500).json({ error });
    }
  }
);

app.listen('9000', () => console.log(`Express server listening on port 9000`))
