//--

import { Empty } from "@/lib/grpc/common";
import { PingResponse } from "@/lib/grpc/utilities";
import { UtilitiesServiceClient } from "@/lib/grpc/utilities.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";


// Services
//
//
// ## Reference
//
// - [dnevb/dburst](https://github.com/dnevb/dburst/blob/a440b2a18f874f22fed2825b6e9b0e24cd606e73/ui/src/provider/services.ts)

// TODO: Needs a status or health check type/domain to replace PingResponse
export async function sendPintRequest(): Promise<PingResponse> {
  console.log("Send ping request")

  // Create a new GRPC transport layer
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8091",
  });

  // Create a new utilities client
  const utilities_client = new UtilitiesServiceClient(transport);

  // Create a ping request
  const ping_request = Empty.create({});

  const { response: ping_response, status } = await utilities_client.ping(ping_request);

  console.log("Backend status is:", status)

  return ping_response;
}