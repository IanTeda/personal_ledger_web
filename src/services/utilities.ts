//--

import { Empty } from "@/lib/grpc/authentication/common";
import { PingResponse } from "@/lib/grpc/authentication/utilities";
import {
  IUtilitiesServiceClient,
  UtilitiesServiceClient,
} from "@/lib/grpc/authentication/utilities.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

// Services
//
//
// ## Reference
//
// - [dnevb/dburst](https://github.com/dnevb/dburst/blob/a440b2a18f874f22fed2825b6e9b0e24cd606e73/ui/src/provider/services.ts)

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:8091",
});

const client = new UtilitiesServiceClient(transport);

export async function ping() {
  await pingRequest(client);
}

export async function pingRequest(client: IUtilitiesServiceClient): Promise<PingResponse> {
  const request = Empty.create();

  const response = await client.ping(request).response;

  return response;
}

