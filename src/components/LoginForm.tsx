// https://github.com/Nv4n/idea-board-spring-boot/blob/4dd6db0330a8f88d2f435264b1931502789b49bb/src/react/src/components/board/CreateNoteForm.tsx#L29

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Empty } from "@/lib/grpc/authentication/common";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { UtilitiesServiceClient } from "@/lib/grpc/authentication/utilities.client";

async function pingRequest(): Promise<Empty> {
  console.log("## Ping request function...")

  // Building ping request object
  const pingRequest: Empty = {};

  // create a transport layer
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8091",
  });

  // Call the UtilitiesClient service
  const client = new UtilitiesServiceClient(transport);

  const { response } = await client.ping(pingRequest);
  console.log("Ping response received:", response)
  
  return response;
}


export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  const callPing = async () => {
    console.log("## Call ping on auth server...");

    const response = await pingRequest();
    console.log("The response is:", response);
  };


  // // create a transport layer
  // const transport = new GrpcWebFetchTransport({
  //   baseUrl: "http://localhost:8081",
  // });

  // // Call the UtilitiesClient service
  // const client = new UtilitiesClient(transport);

  // // Ping the authentication backend
  // async function ping() {
  //   console.log(`### Ping function`);
  //   await callPing(client);
  // }

  // async function callPing() {
  //   console.log(`### Calling ping...`);

  //   // Building ping request object
  //   const pingRequest: Empty = {};

  //   // create a transport layer
  //   const transport = new GrpcWebFetchTransport({
  //     baseUrl: "http://localhost:8081",
  //   });

  //   // Construct a new client for the UtilitiesClient service
  //   const client = new UtilitiesClient(transport);

    

    // const call = async () => {
    //   client.ping(pingRequest);

    //   const headers = await call.headers;
    //   console.log("got response headers: ", headers);
    // }

    // call();
    // console.log("The ping is: ", response);

    // const response = await call.response;
    // console.log("got response message: ", response);

    // const status = await call.status;
    // console.log("got status: ", status);

    // const trailers = await call.trailers;
    // console.log("got trailers: ", trailers);
    // return response;
  // }

  // async function Ping() {
  //   console.log(`## Pinging http://localhost:8081`);

  //   const response = await client.ping({}).response;

  //   console.log(response);
  // }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button onClick={callPing} className="w-full">
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
