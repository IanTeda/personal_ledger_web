//-- ./src/queries/ping.ts

import { PingResponse } from "@/lib/grpc/authentication/utilities";
import { sendPintRequest as sendPingRequest } from "@/services/utilities";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

/// # TanStack Ping Query
///
/// Query hooks to ping the backend

// export type Ping = {
//   isOnline?: string | undefined;
// };

const PING_QUERY_KEY = "ping";

export function usePingQuery() {
  return useQuery({
    queryKey: [PING_QUERY_KEY],
    queryFn: async (): Promise<PingResponse> => sendPingRequest(),
  });
}

export function usePingMutation() {
  const queryClient = useQueryClient();

  // Return the TanStack Query useMutation hook
  return useMutation({
    mutationKey: [PING_QUERY_KEY],
    // Parameters need to be wrapped in an object
    mutationFn: async (): Promise<PingResponse> => {
      // send an authentication request to the backend.
      // Mutation function must return a value to meet promise
      return sendPingRequest();
    },

    // Do something with the mutation function data returned
    onSuccess: (data: PingResponse) => {
      // Set the TokenResponse data in the query cache
      queryClient.setQueryData([PING_QUERY_KEY], data);

      // Set local session storage for the access token
      sessionStorage.setItem("auth_server_status", data.message);
    },
  });
}