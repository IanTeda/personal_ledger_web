import { usePingQuery } from '@/queries/ping';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {

  // console.log("API URL:", configuration.AUTHENTICATION_BASE_URL);

  const { data } = usePingQuery();

  return (
    <>
      <div>Hello "/"!</div>
      <pre>{data?.message}</pre>
    </>
  );
}
