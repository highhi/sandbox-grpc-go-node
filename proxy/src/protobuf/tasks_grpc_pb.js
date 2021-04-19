// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tasks_pb = require('./tasks_pb.js');

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
};

exports.TasksClient = grpc.makeGenericClientConstructor(TasksService);
