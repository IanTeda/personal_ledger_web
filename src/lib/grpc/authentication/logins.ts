// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "authentication/logins.proto" (package "authentication", syntax proto3)
// tslint:disable
//
//-- ./proto/logins.proto
//
//
/// Authentication logins service definitions
//
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * The request message containing the create login data.
 *
 * @generated from protobuf message authentication.LoginsCreateRequest
 */
export interface LoginsCreateRequest {
    /**
     * @generated from protobuf field: string user_id = 1;
     */
    userId: string;
    /**
     * @generated from protobuf field: string login_on = 2;
     */
    loginOn: string;
    /**
     * @generated from protobuf field: optional int32 login_ip = 3;
     */
    loginIp?: number;
}
/**
 * The response message containing the login data.
 *
 * @generated from protobuf message authentication.LoginsResponse
 */
export interface LoginsResponse {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from protobuf field: string login_on = 3;
     */
    loginOn: string;
    /**
     * @generated from protobuf field: optional int32 login_ip = 4;
     */
    loginIp?: number;
}
/**
 * The request message containing the read login data.
 *
 * @generated from protobuf message authentication.LoginsReadRequest
 */
export interface LoginsReadRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * The request message containing the login index data.
 *
 * @generated from protobuf message authentication.LoginsIndexRequest
 */
export interface LoginsIndexRequest {
    /**
     * @generated from protobuf field: int32 limit = 1;
     */
    limit: number;
    /**
     * @generated from protobuf field: int32 offset = 2;
     */
    offset: number;
}
/**
 * The request message containing the update login data.
 *
 * @generated from protobuf message authentication.LoginsUpdateRequest
 */
export interface LoginsUpdateRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string user_id = 2;
     */
    userId: string;
    /**
     * @generated from protobuf field: string login_on = 3;
     */
    loginOn: string;
    /**
     * @generated from protobuf field: optional int32 login_ip = 4;
     */
    loginIp?: number;
}
/**
 * The request message containing the delete login data.
 *
 * @generated from protobuf message authentication.LoginsDeleteRequest
 */
export interface LoginsDeleteRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * The response message containing the login index data.
 *
 * @generated from protobuf message authentication.LoginsIndexResponse
 */
export interface LoginsIndexResponse {
    /**
     * @generated from protobuf field: repeated authentication.LoginsResponse logins = 1;
     */
    logins: LoginsResponse[];
}
/**
 * The response message containing the delete login data.
 *
 * @generated from protobuf message authentication.LoginsDeleteResponse
 */
export interface LoginsDeleteResponse {
    /**
     * @generated from protobuf field: int64 rows_affected = 1;
     */
    rowsAffected: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class LoginsCreateRequest$Type extends MessageType<LoginsCreateRequest> {
    constructor() {
        super("authentication.LoginsCreateRequest", [
            { no: 1, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "login_on", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "login_ip", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsCreateRequest>): LoginsCreateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.userId = "";
        message.loginOn = "";
        if (value !== undefined)
            reflectionMergePartial<LoginsCreateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsCreateRequest): LoginsCreateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string user_id */ 1:
                    message.userId = reader.string();
                    break;
                case /* string login_on */ 2:
                    message.loginOn = reader.string();
                    break;
                case /* optional int32 login_ip */ 3:
                    message.loginIp = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsCreateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string user_id = 1; */
        if (message.userId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.userId);
        /* string login_on = 2; */
        if (message.loginOn !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.loginOn);
        /* optional int32 login_ip = 3; */
        if (message.loginIp !== undefined)
            writer.tag(3, WireType.Varint).int32(message.loginIp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsCreateRequest
 */
export const LoginsCreateRequest = new LoginsCreateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsResponse$Type extends MessageType<LoginsResponse> {
    constructor() {
        super("authentication.LoginsResponse", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "login_on", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "login_ip", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsResponse>): LoginsResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.userId = "";
        message.loginOn = "";
        if (value !== undefined)
            reflectionMergePartial<LoginsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsResponse): LoginsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string user_id */ 2:
                    message.userId = reader.string();
                    break;
                case /* string login_on */ 3:
                    message.loginOn = reader.string();
                    break;
                case /* optional int32 login_ip */ 4:
                    message.loginIp = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string user_id = 2; */
        if (message.userId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.userId);
        /* string login_on = 3; */
        if (message.loginOn !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.loginOn);
        /* optional int32 login_ip = 4; */
        if (message.loginIp !== undefined)
            writer.tag(4, WireType.Varint).int32(message.loginIp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsResponse
 */
export const LoginsResponse = new LoginsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsReadRequest$Type extends MessageType<LoginsReadRequest> {
    constructor() {
        super("authentication.LoginsReadRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsReadRequest>): LoginsReadRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<LoginsReadRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsReadRequest): LoginsReadRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsReadRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsReadRequest
 */
export const LoginsReadRequest = new LoginsReadRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsIndexRequest$Type extends MessageType<LoginsIndexRequest> {
    constructor() {
        super("authentication.LoginsIndexRequest", [
            { no: 1, name: "limit", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "offset", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsIndexRequest>): LoginsIndexRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.limit = 0;
        message.offset = 0;
        if (value !== undefined)
            reflectionMergePartial<LoginsIndexRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsIndexRequest): LoginsIndexRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int32 limit */ 1:
                    message.limit = reader.int32();
                    break;
                case /* int32 offset */ 2:
                    message.offset = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsIndexRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 limit = 1; */
        if (message.limit !== 0)
            writer.tag(1, WireType.Varint).int32(message.limit);
        /* int32 offset = 2; */
        if (message.offset !== 0)
            writer.tag(2, WireType.Varint).int32(message.offset);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsIndexRequest
 */
export const LoginsIndexRequest = new LoginsIndexRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsUpdateRequest$Type extends MessageType<LoginsUpdateRequest> {
    constructor() {
        super("authentication.LoginsUpdateRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "user_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "login_on", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "login_ip", kind: "scalar", opt: true, T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsUpdateRequest>): LoginsUpdateRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.userId = "";
        message.loginOn = "";
        if (value !== undefined)
            reflectionMergePartial<LoginsUpdateRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsUpdateRequest): LoginsUpdateRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string user_id */ 2:
                    message.userId = reader.string();
                    break;
                case /* string login_on */ 3:
                    message.loginOn = reader.string();
                    break;
                case /* optional int32 login_ip */ 4:
                    message.loginIp = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsUpdateRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string user_id = 2; */
        if (message.userId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.userId);
        /* string login_on = 3; */
        if (message.loginOn !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.loginOn);
        /* optional int32 login_ip = 4; */
        if (message.loginIp !== undefined)
            writer.tag(4, WireType.Varint).int32(message.loginIp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsUpdateRequest
 */
export const LoginsUpdateRequest = new LoginsUpdateRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsDeleteRequest$Type extends MessageType<LoginsDeleteRequest> {
    constructor() {
        super("authentication.LoginsDeleteRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsDeleteRequest>): LoginsDeleteRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        if (value !== undefined)
            reflectionMergePartial<LoginsDeleteRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsDeleteRequest): LoginsDeleteRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsDeleteRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsDeleteRequest
 */
export const LoginsDeleteRequest = new LoginsDeleteRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsIndexResponse$Type extends MessageType<LoginsIndexResponse> {
    constructor() {
        super("authentication.LoginsIndexResponse", [
            { no: 1, name: "logins", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => LoginsResponse }
        ]);
    }
    create(value?: PartialMessage<LoginsIndexResponse>): LoginsIndexResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.logins = [];
        if (value !== undefined)
            reflectionMergePartial<LoginsIndexResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsIndexResponse): LoginsIndexResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated authentication.LoginsResponse logins */ 1:
                    message.logins.push(LoginsResponse.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsIndexResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated authentication.LoginsResponse logins = 1; */
        for (let i = 0; i < message.logins.length; i++)
            LoginsResponse.internalBinaryWrite(message.logins[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsIndexResponse
 */
export const LoginsIndexResponse = new LoginsIndexResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginsDeleteResponse$Type extends MessageType<LoginsDeleteResponse> {
    constructor() {
        super("authentication.LoginsDeleteResponse", [
            { no: 1, name: "rows_affected", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<LoginsDeleteResponse>): LoginsDeleteResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.rowsAffected = 0n;
        if (value !== undefined)
            reflectionMergePartial<LoginsDeleteResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginsDeleteResponse): LoginsDeleteResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* int64 rows_affected */ 1:
                    message.rowsAffected = reader.int64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoginsDeleteResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int64 rows_affected = 1; */
        if (message.rowsAffected !== 0n)
            writer.tag(1, WireType.Varint).int64(message.rowsAffected);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message authentication.LoginsDeleteResponse
 */
export const LoginsDeleteResponse = new LoginsDeleteResponse$Type();
/**
 * @generated ServiceType for protobuf service authentication.loginsService
 */
export const loginsService = new ServiceType("authentication.loginsService", [
    { name: "Create", options: {}, I: LoginsCreateRequest, O: LoginsResponse },
    { name: "Read", options: {}, I: LoginsReadRequest, O: LoginsResponse },
    { name: "Index", options: {}, I: LoginsIndexRequest, O: LoginsIndexResponse },
    { name: "Update", options: {}, I: LoginsUpdateRequest, O: LoginsResponse },
    { name: "Delete", options: {}, I: LoginsDeleteRequest, O: LoginsDeleteResponse }
]);
