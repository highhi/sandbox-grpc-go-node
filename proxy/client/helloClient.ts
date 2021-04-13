import { credentials } from '@grpc/grpc-js'
import { GreeterClient } from '../proto/hello_grpc_pb'
import { HelloReply, HelloRequest } from '../proto/hello_pb'

export const sayHello = ({ name = "World" }: { name?: string }): Promise<HelloReply.AsObject> => {
  const Request = new HelloRequest();
  const client = new GreeterClient(
    'localhost:8080',
    credentials.createInsecure(),
  );

  Request.setName(name);

  return new Promise((resolve, reject) => {
    client.sayHello(Request, (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error.code || 500,
          message: error.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}
