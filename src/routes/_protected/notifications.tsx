import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/notifications")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Notifications",
  }),
});

function RouteComponent() {
  return <div>Hello "/_protected/notifications"!</div>
}
