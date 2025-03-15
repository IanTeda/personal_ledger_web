import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/settings")({
  component: RouteComponent,
  loader: () => ({
    crumb: "Settings",
  }),
});

function RouteComponent() {
  return <div>Hello "/_protected/settings"!</div>
}
