// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var health_pb = require('./health_pb.js');

function serialize_HealthReply(arg) {
  if (!(arg instanceof health_pb.HealthReply)) {
    throw new Error('Expected argument of type HealthReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HealthReply(buffer_arg) {
  return health_pb.HealthReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_HealthRequest(arg) {
  if (!(arg instanceof health_pb.HealthRequest)) {
    throw new Error('Expected argument of type HealthRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_HealthRequest(buffer_arg) {
  return health_pb.HealthRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HealthService = exports.HealthService = {
  check: {
    path: '/Health/Check',
    requestStream: false,
    responseStream: false,
    requestType: health_pb.HealthRequest,
    responseType: health_pb.HealthReply,
    requestSerialize: serialize_HealthRequest,
    requestDeserialize: deserialize_HealthRequest,
    responseSerialize: serialize_HealthReply,
    responseDeserialize: deserialize_HealthReply,
  },
};

exports.HealthClient = grpc.makeGenericClientConstructor(HealthService);
