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

function serialize_GetTasksReply(arg) {
  if (!(arg instanceof tasks_pb.GetTasksReply)) {
    throw new Error('Expected argument of type GetTasksReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTasksReply(buffer_arg) {
  return tasks_pb.GetTasksReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_GetTasksRequest(arg) {
  if (!(arg instanceof tasks_pb.GetTasksRequest)) {
    throw new Error('Expected argument of type GetTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_GetTasksRequest(buffer_arg) {
  return tasks_pb.GetTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  getTasks: {
    path: '/Tasks/GetTasks',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.GetTasksRequest,
    responseType: tasks_pb.GetTasksReply,
    requestSerialize: serialize_GetTasksRequest,
    requestDeserialize: deserialize_GetTasksRequest,
    responseSerialize: serialize_GetTasksReply,
    responseDeserialize: deserialize_GetTasksReply,
  },
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
