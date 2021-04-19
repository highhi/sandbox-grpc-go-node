// package: 
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as tasks_pb from "./tasks_pb";

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTask: ITasksService_ICreateTask;
}

interface ITasksService_ICreateTask extends grpc.MethodDefinition<tasks_pb.CreateTaskRequest, tasks_pb.CreateTaskReply> {
    path: "/Tasks/CreateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.CreateTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.CreateTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.CreateTaskReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.CreateTaskReply>;
}

export const TasksService: ITasksService;

export interface ITasksServer extends grpc.UntypedServiceImplementation {
    createTask: grpc.handleUnaryCall<tasks_pb.CreateTaskRequest, tasks_pb.CreateTaskReply>;
}

export interface ITasksClient {
    createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
}
