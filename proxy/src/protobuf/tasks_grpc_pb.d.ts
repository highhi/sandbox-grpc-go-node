// package: 
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as tasks_pb from "./tasks_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTask: ITasksService_ICreateTask;
    getTasks: ITasksService_IGetTasks;
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
interface ITasksService_IGetTasks extends grpc.MethodDefinition<tasks_pb.GetTasksRequest, tasks_pb.GetTasksReply> {
    path: "/Tasks/GetTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.GetTasksRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.GetTasksRequest>;
    responseSerialize: grpc.serialize<tasks_pb.GetTasksReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.GetTasksReply>;
}

export const TasksService: ITasksService;

export interface ITasksServer extends grpc.UntypedServiceImplementation {
    createTask: grpc.handleUnaryCall<tasks_pb.CreateTaskRequest, tasks_pb.CreateTaskReply>;
    getTasks: grpc.handleUnaryCall<tasks_pb.GetTasksRequest, tasks_pb.GetTasksReply>;
}

export interface ITasksClient {
    createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
}
