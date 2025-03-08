//-- ./src/services/authentication.ts

/**
 * ## Authentication Service
 * 
 * The authentication service is responsible for handling user authentication with
 * the application. The service provides a login method that accepts an email and
 * password and returns a authentication response from the backend.
 * 
 * @packageDocumentation
 * @module services/authentication
 * @category Services
 * @subcategory Authentication
 */

import { configuration } from "@/configuration";
import { AuthenticationRequest, AuthenticationResponse } from "@/lib/grpc/authentication";
import { AuthenticationServiceClient } from "@/lib/grpc/authentication.client";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import Logger from "@/logger";

// Create a new logger object
/**
 * Create a new logger object
 * 
 * @type {Logger}
 */
const log:Logger = new Logger();

/**
 * ### Send Authentication Request
 * 
 * The sendAuthenticationRequest function is responsible for sending an authentication
 * request to the backend. The function accepts an email and password and returns a
 * authentication response from the backend.
 * 
 * @param email 
 * @param password 
 * @returns AuthenticationResponse
 */
export async function sendAuthenticationRequest(
  email: string,
  password: string
): Promise<AuthenticationResponse> {
  //TODO: Implement logging standard for the app
  log.debug("Sending authentication request to server.");

  /**
   * Create a new GRPC transport layer
   * TODO: Abstract transport layer for other services to use
   */
  const transport = new GrpcWebFetchTransport({
    baseUrl: configuration.AUTHENTICATION_BASE_URL,
  });

  /**
   * Create a new authentication client
   */
  const authentication_client = new AuthenticationServiceClient(transport);

  /**
   * Create a new authentication request object
   * TODO: Rename proto to AuthenticationRequest
   */
  const authentication_request = AuthenticationRequest.create({
    email: email,
    password: password,
  });

  /**
   * Send authentication request to authentication client
   */
  const { response: authentication_response } =
    await authentication_client.authentication(authentication_request);

  log.debug("Authentication response is: ", authentication_response);

  /**
   * Return the authentication response
   */
  return authentication_response;
}
