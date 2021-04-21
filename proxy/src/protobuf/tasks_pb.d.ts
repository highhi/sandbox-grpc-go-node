// package: 
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Task extends jspb.Message { 
    getId(): number;
    setId(value: number): Task;
    getUid(): string;
    setUid(value: string): Task;
    getTitle(): string;
    setTitle(value: string): Task;
    getContent(): string;
    setContent(value: string): Task;

    hasCreatedat(): boolean;
    clearCreatedat(): void;
    getCreatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedat(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    hasUpdatedat(): boolean;
    clearUpdatedat(): void;
    getUpdatedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedat(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: number,
        uid: string,
        title: string,
        content: string,
        createdat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedat?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class CreateTaskRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): CreateTaskRequest;
    getTitle(): string;
    setTitle(value: string): CreateTaskRequest;
    getContent(): string;
    setContent(value: string): CreateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
    static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
    export type AsObject = {
        uid: string,
        title: string,
        content: string,
    }
}

export class CreateTaskReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskReply.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskReply): CreateTaskReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskReply;
    static deserializeBinaryFromReader(message: CreateTaskReply, reader: jspb.BinaryReader): CreateTaskReply;
}

export namespace CreateTaskReply {
    export type AsObject = {
    }
}

export class GetTasksRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): GetTasksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTasksRequest): GetTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTasksRequest;
    static deserializeBinaryFromReader(message: GetTasksRequest, reader: jspb.BinaryReader): GetTasksRequest;
}

export namespace GetTasksRequest {
    export type AsObject = {
        uid: string,
    }
}

export class GetTasksReply extends jspb.Message { 
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): GetTasksReply;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTasksReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTasksReply): GetTasksReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTasksReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTasksReply;
    static deserializeBinaryFromReader(message: GetTasksReply, reader: jspb.BinaryReader): GetTasksReply;
}

export namespace GetTasksReply {
    export type AsObject = {
        tasksList: Array<Task.AsObject>,
    }
}

export class GetTaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetTaskRequest;
    getUid(): string;
    setUid(value: string): GetTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskRequest): GetTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskRequest;
    static deserializeBinaryFromReader(message: GetTaskRequest, reader: jspb.BinaryReader): GetTaskRequest;
}

export namespace GetTaskRequest {
    export type AsObject = {
        id: number,
        uid: string,
    }
}

export class GetTaskReply extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): GetTaskReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskReply): GetTaskReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskReply;
    static deserializeBinaryFromReader(message: GetTaskReply, reader: jspb.BinaryReader): GetTaskReply;
}

export namespace GetTaskReply {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class UpdateTaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateTaskRequest;
    getUid(): string;
    setUid(value: string): UpdateTaskRequest;
    getTitle(): string;
    setTitle(value: string): UpdateTaskRequest;
    getContent(): string;
    setContent(value: string): UpdateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
    static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
    export type AsObject = {
        id: number,
        uid: string,
        title: string,
        content: string,
    }
}

export class UpdateTaskReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskReply.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskReply): UpdateTaskReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskReply;
    static deserializeBinaryFromReader(message: UpdateTaskReply, reader: jspb.BinaryReader): UpdateTaskReply;
}

export namespace UpdateTaskReply {
    export type AsObject = {
    }
}
