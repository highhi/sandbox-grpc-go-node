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
    getTask: ITasksService_IGetTask;
    getTasks: ITasksService_IGetTasks;
    updateTask: ITasksService_IUpdateTask;
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
interface ITasksService_IGetTask extends grpc.MethodDefinition<tasks_pb.GetTaskRequest, tasks_pb.GetTaskReply> {
    path: "/Tasks/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.GetTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.GetTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.GetTaskReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.GetTaskReply>;
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
interface ITasksService_IUpdateTask extends grpc.MethodDefinition<tasks_pb.UpdateTaskRequest, tasks_pb.UpdateTaskReply> {
    path: "/Tasks/UpdateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.UpdateTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.UpdateTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.UpdateTaskReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.UpdateTaskReply>;
}

export const TasksService: ITasksService;

export interface ITasksServer extends grpc.UntypedServiceImplementation {
    createTask: grpc.handleUnaryCall<tasks_pb.CreateTaskRequest, tasks_pb.CreateTaskReply>;
    getTask: grpc.handleUnaryCall<tasks_pb.GetTaskRequest, tasks_pb.GetTaskReply>;
    getTasks: grpc.handleUnaryCall<tasks_pb.GetTasksRequest, tasks_pb.GetTasksReply>;
    updateTask: grpc.handleUnaryCall<tasks_pb.UpdateTaskRequest, tasks_pb.UpdateTaskReply>;
}

export interface ITasksClient {
    createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    public getTasks(request: tasks_pb.GetTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTasksReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
}
