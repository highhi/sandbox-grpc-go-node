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

export class GetTaskListRequest extends jspb.Message { 
    getUid(): string;
    setUid(value: string): GetTaskListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskListRequest): GetTaskListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskListRequest;
    static deserializeBinaryFromReader(message: GetTaskListRequest, reader: jspb.BinaryReader): GetTaskListRequest;
}

export namespace GetTaskListRequest {
    export type AsObject = {
        uid: string,
    }
}

export class GetTaskListReply extends jspb.Message { 
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): GetTaskListReply;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTaskListReply.AsObject;
    static toObject(includeInstance: boolean, msg: GetTaskListReply): GetTaskListReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTaskListReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTaskListReply;
    static deserializeBinaryFromReader(message: GetTaskListReply, reader: jspb.BinaryReader): GetTaskListReply;
}

export namespace GetTaskListReply {
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

export class DeleteTaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteTaskRequest;
    getUid(): string;
    setUid(value: string): DeleteTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
    static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
    export type AsObject = {
        id: number,
        uid: string,
    }
}

export class DeleteTaskReply extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskReply.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskReply): DeleteTaskReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskReply;
    static deserializeBinaryFromReader(message: DeleteTaskReply, reader: jspb.BinaryReader): DeleteTaskReply;
}

export namespace DeleteTaskReply {
    export type AsObject = {
    }
}
