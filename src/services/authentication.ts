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
import {
  AuthenticationRequest,
  AuthenticationResponse,
} from "@/lib/grpc/authentication";
import { AuthenticationServiceClient } from "@/lib/grpc/authentication.client";
import Logger from "@/logger";
import { Empty } from "@/lib/grpc/common";

// Create a new logger object
/**
 * Create a new logger object
 *
 * @type {Logger}
 */
const log: Logger = new Logger();

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
   */
  const transport = configuration.GRPC_WEB_TRANSPORT;
  log.silly("Authentication server set to: ", configuration.AUTHENTICATION_BASE_URL);

  /**
   * Create a new authentication client
   */
  const authentication_client = new AuthenticationServiceClient(transport);

  /**
   * Create a new authentication request object
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

  return authentication_response;
}

export async function sendRefreshTokenRequest(): Promise<AuthenticationResponse> {
  log.debug("Sending refresh token request to server.");

  /**
   * Create a new GRPC transport layer
   */
  const transport = configuration.GRPC_WEB_TRANSPORT;

  /**
   * Create a new authentication client
   */
  const authentication_client = new AuthenticationServiceClient(transport);

  /**
   * Create a new authentication request object
   */
  const empty_request = Empty.create();

  /**
   * Send refresh token request to authentication client
   */
  const { response: refresh_response } =
    await authentication_client.refresh(empty_request);

  return refresh_response;
}