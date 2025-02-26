//-- ./src/services/authentication.ts

/// # Authentication Service
///
/// The authentication service is responsible for handling user authentication with
/// the application. The service provides a login method that accepts an email and
/// password and returns a token response from the backend.

import { AuthenticationRequest, AuthenticationResponse } from "@/lib/grpc/authentication";
import { AuthenticationServiceClient } from "@/lib/grpc/authentication.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

export async function sendAuthenticationRequest(
  email: string,
  password: string
): Promise<AuthenticationResponse> {
  //TODO: Implement logging standard for the app
  console.log("Send authentication request.");

  // Create a new transport layer
  // TODO: Abstract transport layer for other services to use
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8091",
  });

  // Create a new Authentication service client
  const authentication_client = new AuthenticationServiceClient(transport);

  // Building Authentication request object
  // TODO: Rename proto to AuthenticationRequest
  const authentication_request = AuthenticationRequest.create({
    email: email,
    password: password,
  });

  // Send authentication request to authentication client
  const { response: authentication_response } = await authentication_client.authentication(authentication_request);

  console.log("Response is: ", authentication_response);

  return authentication_response;
}
