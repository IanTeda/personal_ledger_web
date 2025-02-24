import { TokenResponse } from "@/lib/grpc/authentication/authentication";
import { sendAuthenticationRequest } from "@/services/authentication";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const QUERY_KEY = "tokens";

export function authenticationQueryOptions(email: string, password: string) {
  return queryOptions({
    queryKey: [QUERY_KEY],
    queryFn: async (): Promise<TokenResponse> =>
      sendAuthenticationRequest(email, password),
  });
}

export function useAuthenticationQuery(email: string, password: string) {
  return useQuery(authenticationQueryOptions(email, password));
}


// ## Authentication Mutation Hook
//
// This hook is used to authenticate a user with the application. It accepts an 
// email and password and returns a rpc TokenResponse from the backend. It calls 
// the sendAuthenticationRequest function from the services/authentication.ts 
// file to send the authentication request to the backend.
// The onSuccess callback function sets the token response data in the query 
// cache using the queryClient.setQueryData method.
// The hook returns the useMutation hook with the mutation key set to [QUERY_KEY] 
// and the mutation function set to sendAuthenticationRequest. It also sets the 
// onSuccess callback function to update the query cache with the TokenResponse data.
export function useAuthenticationMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [QUERY_KEY],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }): Promise<TokenResponse> => {
      return sendAuthenticationRequest(email, password);
    },
    onSuccess: (data) => {
      queryClient.setQueryData([QUERY_KEY], data);
    },
  });
}

// const mutateTokens = useMutation({
//   mutationKey: ["tokens"],
//   mutationFn: async ({
//     email,
//     password,
//   }: {
//     email: string;
//     password: string;
//   }) => {
//     return sendAuthenticationRequest(email, password);
//   },
//   onSuccess: (data) => {
//     queryClient.setQueryData(["tokens"], data);
//   },
// });

// const updateTokens = useMutation({
//   mutationKey: ["tokens"],
//   mutationFn: async (value: { email: string; password: string }) => {
//     console.log("Mutate tokens");
//     console.log(value);

//     // Create a new transport layer
//     const transport = new GrpcWebFetchTransport({
//       baseUrl: "http://localhost:8091",
//     });

//     // Create a new Authentication service client
//     const client = new AuthenticationServiceClient(transport);

//     // Building login request object
//     const request = LoginRequest.create({
//       email: value.email,
//       password: value.password,
//     });

//     // Send login request to authentication client
//     const { response } = await client.login(request);

//     console.log("Access Token: ", response.accessToken);
//     console.log("Refresh Token: ", response.refreshToken);

//     return response;
//   },
//   onSuccess: (data) => {
//     queryClient.setQueryData(["tokens"], data);
//   },
// });
