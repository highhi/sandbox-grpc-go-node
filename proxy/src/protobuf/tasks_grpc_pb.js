// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tasks_pb = require('./tasks_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_CreateTaskReply(arg) {
  if (!(arg instanceof tasks_pb.CreateTaskReply)) {
    throw new Error('Expected argument of type CreateTaskReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTaskReply(buffer_arg) {
  return tasks_pb.CreateTaskReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_CreateTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.CreateTaskRequest)) {
    throw new Error('Expected argument of type CreateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_CreateTaskRequest(buffer_arg) {
  return tasks_pb.CreateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTaskReply(arg) {
  if (!(arg instanceof tasks_pb.DeleteTaskReply)) {
    throw new Error('Expected argument of type DeleteTaskReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteTaskReply(buffer_arg) {
  return tasks_pb.DeleteTaskReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_DeleteTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_DeleteTaskRequest(buffer_arg) {
  return tasks_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTaskListReply(arg) {
  if (!(arg instanceof tasks_pb.GetTaskListReply)) {
    throw new Error('Expected argument of type GetTaskListReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTaskListReply(buffer_arg) {
  return tasks_pb.GetTaskListReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTaskListRequest(arg) {
  if (!(arg instanceof tasks_pb.GetTaskListRequest)) {
    throw new Error('Expected argument of type GetTaskListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTaskListRequest(buffer_arg) {
  return tasks_pb.GetTaskListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTaskReply(arg) {
  if (!(arg instanceof tasks_pb.GetTaskReply)) {
    throw new Error('Expected argument of type GetTaskReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTaskReply(buffer_arg) {
  return tasks_pb.GetTaskReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.GetTaskRequest)) {
    throw new Error('Expected argument of type GetTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTaskRequest(buffer_arg) {
  return tasks_pb.GetTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateTaskReply(arg) {
  if (!(arg instanceof tasks_pb.UpdateTaskReply)) {
    throw new Error('Expected argument of type UpdateTaskReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateTaskReply(buffer_arg) {
  return tasks_pb.UpdateTaskReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UpdateTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.UpdateTaskRequest)) {
    throw new Error('Expected argument of type UpdateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UpdateTaskRequest(buffer_arg) {
  return tasks_pb.UpdateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TasksService = exports.TasksService = {
  createTask: {
    path: '/Tasks/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.CreateTaskRequest,
    responseType: tasks_pb.CreateTaskReply,
    requestSerialize: serialize_CreateTaskRequest,
    requestDeserialize: deserialize_CreateTaskRequest,
    responseSerialize: serialize_CreateTaskReply,
    responseDeserialize: deserialize_CreateTaskReply,
  },
  getTask: {
    path: '/Tasks/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.GetTaskRequest,
    responseType: tasks_pb.GetTaskReply,
    requestSerialize: serialize_GetTaskRequest,
    requestDeserialize: deserialize_GetTaskRequest,
    responseSerialize: serialize_GetTaskReply,
    responseDeserialize: deserialize_GetTaskReply,
  },
  getTaskList: {
    path: '/Tasks/GetTaskList',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.GetTaskListRequest,
    responseType: tasks_pb.GetTaskListReply,
    requestSerialize: serialize_GetTaskListRequest,
    requestDeserialize: deserialize_GetTaskListRequest,
    responseSerialize: serialize_GetTaskListReply,
    responseDeserialize: deserialize_GetTaskListReply,
  },
  updateTask: {
    path: '/Tasks/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.UpdateTaskRequest,
    responseType: tasks_pb.UpdateTaskReply,
    requestSerialize: serialize_UpdateTaskRequest,
    requestDeserialize: deserialize_UpdateTaskRequest,
    responseSerialize: serialize_UpdateTaskReply,
    responseDeserialize: deserialize_UpdateTaskReply,
  },
  deleteTask: {
    path: '/Tasks/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.DeleteTaskRequest,
    responseType: tasks_pb.DeleteTaskReply,
    requestSerialize: serialize_DeleteTaskRequest,
    requestDeserialize: deserialize_DeleteTaskRequest,
    responseSerialize: serialize_DeleteTaskReply,
    responseDeserialize: deserialize_DeleteTaskReply,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
