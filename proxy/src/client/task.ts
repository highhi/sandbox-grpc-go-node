import { credentials } from '@grpc/grpc-js'
import { TasksClient } from '../protobuf/tasks_grpc_pb'
import { CreateTaskRequest, CreateTaskReply, GetTasksRequest, GetTasksReply } from '../protobuf/tasks_pb'

const createClient = (): TasksClient => {
  return new TasksClient(
    'localhost:8080',
    credentials.createInsecure(),
  );
}

export const create = (params: CreateTaskRequest.AsObject): Promise<CreateTaskReply.AsObject> => {
  const request = new CreateTaskRequest();
  const client = createClient()

  request.setUid(params.uid);
  request.setTitle(params.title);
  request.setContent(params.content);

  return new Promise((resolve, reject) => {
    client.createTask(request, (error, response) => {
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

export const get = (params: GetTasksRequest.AsObject): Promise<GetTasksReply.AsObject> => {
  const request = new GetTasksRequest()
  const client = createClient()

  request.setUid(params.uid)

  return new Promise((resolve, reject) => {
    client.getTasks(request, (error, response) => {
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
