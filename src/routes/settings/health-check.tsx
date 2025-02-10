import { Button } from '@/components/ui/button';
import { UtilitiesServiceClient } from '@/lib/grpc/authentication/utilities.client';
import { pingRequest } from '@/services/utilities';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import { createFileRoute } from '@tanstack/react-router'

const buttonClick = () => {
  console.log('Button clicked!')
  
  const transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:8091",
  });
  
  const client = new UtilitiesServiceClient(transport);

  pingRequest(client).then((response) => {
    console.log("Ping response:", response.message);
  });
}

export const Route = createFileRoute('/settings/health-check')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/settings/health-check"!</div>
      <Button variant="outline" onClick={buttonClick}>
        Ping
      </Button>
    </>
  );
}
