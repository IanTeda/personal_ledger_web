import { usePingQuery } from '@/queries/ping';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const { data } = usePingQuery();

  return (
    <>
      <div>Hello "/"!</div>
      <pre>{data?.message}</pre>
    </>
  );
}
