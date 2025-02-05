//-- ./src/client.ts

/// Grpc Client Code

import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { UtilitiesClient } from "./lib/grpc/authentication/utilities.client";
import { Empty } from "./lib/grpc/authentication/common";

// create a transport layer
const transport = new GrpcWebFetchTransport({
  baseUrl: "http://127.0.0.1:8081",
});

// Call the UtilitiesClient service
const client = new UtilitiesClient(transport);

async function main() {
  await Ping();
}

async function Ping() {
  console.log(`### calling ping method...`);
  
  const response = await client.ping(Empty);

  console.log(response);
}

main().catch((e) => console.error(e));