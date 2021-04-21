import { credentials } from '@grpc/grpc-js'
import { TasksClient } from '../protobuf/tasks_grpc_pb'
import {
  CreateTaskRequest,
  CreateTaskReply,
  GetTaskListRequest,
  GetTaskListReply,
  GetTaskReply,
  GetTaskRequest,
  UpdateTaskRequest,
  UpdateTaskReply
} from '../protobuf/tasks_pb'

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

export const getList = (params: GetTaskListRequest.AsObject): Promise<GetTaskListReply.AsObject> => {
  const request = new GetTaskListRequest()
  const client = createClient()

  request.setUid(params.uid)

  return new Promise((resolve, reject) => {
    client.getTaskList(request, (error, response) => {
      if (error) {
        // console.error(error);
        return reject({
          code: error.code || 500,
          message: error.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}

export const getById = (params: GetTaskRequest.AsObject): Promise<GetTaskReply.AsObject> => {
  const request = new GetTaskRequest()
  const client = createClient()

  request.setUid(params.uid)
  request.setId(params.id)

  return new Promise((resolve, reject) => {
    client.getTask(request, (error, response) => {
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

export const update = (params: UpdateTaskRequest.AsObject): Promise<UpdateTaskReply.AsObject> => {
  const request = new UpdateTaskRequest()
  const client = createClient()

  request.setUid(params.uid)
  request.setId(params.id)
  request.setTitle(params.title)
  request.setContent(params.content)

  return new Promise((resolve, reject) => {
    client.updateTask(request, (error, response) => {
      if (error) {
        return reject({
          code: error.code || 500,
          message: error.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}
