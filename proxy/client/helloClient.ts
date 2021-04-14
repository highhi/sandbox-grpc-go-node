import { credentials } from '@grpc/grpc-js'
import { GreeterClient } from '../protobuf/hello_grpc_pb'
import { HelloReply, HelloRequest } from '../protobuf/hello_pb'

export const sayHello = ({ name = "World" }: { name?: string }): Promise<HelloReply.AsObject> => {
  const request = new HelloRequest();
  const client = new GreeterClient(
    'localhost:8080',
    credentials.createInsecure(),
  );

  request.setName(name);

  return new Promise((resolve, reject) => {
    client.sayHello(request, (error, response) => {
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
