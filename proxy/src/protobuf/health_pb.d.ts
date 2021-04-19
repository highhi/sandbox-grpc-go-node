// package: 
// file: health.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HealthRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): HealthRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthRequest;
    static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
    export type AsObject = {
        name: string,
    }
}

export class HealthReply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): HealthReply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HealthReply.AsObject;
    static toObject(includeInstance: boolean, msg: HealthReply): HealthReply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HealthReply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HealthReply;
    static deserializeBinaryFromReader(message: HealthReply, reader: jspb.BinaryReader): HealthReply;
}

export namespace HealthReply {
    export type AsObject = {
        message: string,
    }
}
