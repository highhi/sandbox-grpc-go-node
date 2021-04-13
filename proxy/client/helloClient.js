const { credentials } = require('@grpc/grpc-js');
const { GreeterClient } = require('../proto/hello_grpc_pb');
const { HelloRequest } = require('../proto/hello_pb');

exports.sayHello = ({ name = "World" }) => {
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