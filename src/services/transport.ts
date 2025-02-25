//-- ./src/client.ts

/// Grpc Client Code

import {
  GrpcWebFetchTransport,
  GrpcWebOptions,
} from "@protobuf-ts/grpcweb-transport";

const RPC_URL = "http://127.0.0.1:8081";

export default function useRPCTransport() {
  const options: GrpcWebOptions = {
    baseUrl: RPC_URL,
    format: "binary",
    timeout: 2 * 1000,
  };
  return new GrpcWebFetchTransport(options);
}
