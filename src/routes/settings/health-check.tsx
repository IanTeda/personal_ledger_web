import { Button } from '@/components/ui/button';
import ping from '@/services/utilities';
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/health-check')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div>Hello "/settings/health-check"!</div>
      <Button variant="outline" onClick={ping}>
        Ping
      </Button>
    </>
  );
}
