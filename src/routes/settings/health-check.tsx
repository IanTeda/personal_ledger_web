import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/health-check')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/settings/health-check"!</div>
    </>
  );
}
