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
    getTaskList: ITasksService_IGetTaskList;
    updateTask: ITasksService_IUpdateTask;
    deleteTask: ITasksService_IDeleteTask;
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
interface ITasksService_IGetTaskList extends grpc.MethodDefinition<tasks_pb.GetTaskListRequest, tasks_pb.GetTaskListReply> {
    path: "/Tasks/GetTaskList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.GetTaskListRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.GetTaskListRequest>;
    responseSerialize: grpc.serialize<tasks_pb.GetTaskListReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.GetTaskListReply>;
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
interface ITasksService_IDeleteTask extends grpc.MethodDefinition<tasks_pb.DeleteTaskRequest, tasks_pb.DeleteTaskReply> {
    path: "/Tasks/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.DeleteTaskReply>;
    responseDeserialize: grpc.deserialize<tasks_pb.DeleteTaskReply>;
}

export const TasksService: ITasksService;

export interface ITasksServer extends grpc.UntypedServiceImplementation {
    createTask: grpc.handleUnaryCall<tasks_pb.CreateTaskRequest, tasks_pb.CreateTaskReply>;
    getTask: grpc.handleUnaryCall<tasks_pb.GetTaskRequest, tasks_pb.GetTaskReply>;
    getTaskList: grpc.handleUnaryCall<tasks_pb.GetTaskListRequest, tasks_pb.GetTaskListReply>;
    updateTask: grpc.handleUnaryCall<tasks_pb.UpdateTaskRequest, tasks_pb.UpdateTaskReply>;
    deleteTask: grpc.handleUnaryCall<tasks_pb.DeleteTaskRequest, tasks_pb.DeleteTaskReply>;
}

export interface ITasksClient {
    createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    getTaskList(request: tasks_pb.GetTaskListRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    getTaskList(request: tasks_pb.GetTaskListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    getTaskList(request: tasks_pb.GetTaskListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
}

export class TasksClient extends grpc.Client implements ITasksClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.CreateTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.GetTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskReply) => void): grpc.ClientUnaryCall;
    public getTaskList(request: tasks_pb.GetTaskListRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    public getTaskList(request: tasks_pb.GetTaskListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    public getTaskList(request: tasks_pb.GetTaskListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.GetTaskListReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.UpdateTaskReply) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskReply) => void): grpc.ClientUnaryCall;
}
