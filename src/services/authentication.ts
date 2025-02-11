

import {
  LoginRequest,
  TokenResponse,
} from "@/lib/grpc/authentication/authentication";
import { AuthenticationServiceClient } from "@/lib/grpc/authentication/authentication.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export async function sendLoginRequest(
  email: string,
  password: string
): Promise<TokenResponse> {

  // Create a new transport layer
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8091",
  });

  // Create a new Authentication service client
  const client = new AuthenticationServiceClient(transport);

  // Building login request object
  const request = LoginRequest.create({
    email: email,
    password: password,
  });

  const { response } = await client.login(request);

  return response;
}
