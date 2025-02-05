// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "authentication/users.proto" (package "authentication", syntax proto3)
// tslint:disable
//
//-- ./proto/users.proto
//
//
/// Authentication users service definitions
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UsersService } from "./users";
import type { DeleteUserResponse } from "./users";
import type { DeleteUserRequest } from "./users";
import type { UpdateUserRequest } from "./users";
import type { UserIndexResponse } from "./users";
import type { UserIndexRequest } from "./users";
import type { ReadUserRequest } from "./users";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UserResponse } from "./users";
import type { CreateUserRequest } from "./users";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Define the Users service definition (endpoints).``
 *
 * @generated from protobuf service authentication.UsersService
 */
export interface IUsersServiceClient {
    /**
     * @generated from protobuf rpc: Create(authentication.CreateUserRequest) returns (authentication.UserResponse);
     */
    create(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, UserResponse>;
    /**
     * @generated from protobuf rpc: Read(authentication.ReadUserRequest) returns (authentication.UserResponse);
     */
    read(input: ReadUserRequest, options?: RpcOptions): UnaryCall<ReadUserRequest, UserResponse>;
    /**
     * @generated from protobuf rpc: Index(authentication.UserIndexRequest) returns (authentication.UserIndexResponse);
     */
    index(input: UserIndexRequest, options?: RpcOptions): UnaryCall<UserIndexRequest, UserIndexResponse>;
    /**
     * @generated from protobuf rpc: Update(authentication.UpdateUserRequest) returns (authentication.UserResponse);
     */
    update(input: UpdateUserRequest, options?: RpcOptions): UnaryCall<UpdateUserRequest, UserResponse>;
    /**
     * @generated from protobuf rpc: Delete(authentication.DeleteUserRequest) returns (authentication.DeleteUserResponse);
     */
    delete(input: DeleteUserRequest, options?: RpcOptions): UnaryCall<DeleteUserRequest, DeleteUserResponse>;
}
/**
 * Define the Users service definition (endpoints).``
 *
 * @generated from protobuf service authentication.UsersService
 */
export class UsersServiceClient implements IUsersServiceClient, ServiceInfo {
    typeName = UsersService.typeName;
    methods = UsersService.methods;
    options = UsersService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Create(authentication.CreateUserRequest) returns (authentication.UserResponse);
     */
    create(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, UserResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateUserRequest, UserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Read(authentication.ReadUserRequest) returns (authentication.UserResponse);
     */
    read(input: ReadUserRequest, options?: RpcOptions): UnaryCall<ReadUserRequest, UserResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<ReadUserRequest, UserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Index(authentication.UserIndexRequest) returns (authentication.UserIndexResponse);
     */
    index(input: UserIndexRequest, options?: RpcOptions): UnaryCall<UserIndexRequest, UserIndexResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserIndexRequest, UserIndexResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(authentication.UpdateUserRequest) returns (authentication.UserResponse);
     */
    update(input: UpdateUserRequest, options?: RpcOptions): UnaryCall<UpdateUserRequest, UserResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateUserRequest, UserResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(authentication.DeleteUserRequest) returns (authentication.DeleteUserResponse);
     */
    delete(input: DeleteUserRequest, options?: RpcOptions): UnaryCall<DeleteUserRequest, DeleteUserResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteUserRequest, DeleteUserResponse>("unary", this._transport, method, opt, input);
    }
}
