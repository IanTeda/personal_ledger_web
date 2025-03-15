import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/reports")({
  component: ReportsRouteComponent,
  loader: () => ({
    crumb: "Reports",
  }),
});

function ReportsRouteComponent() {
  return <div>Hello "/_protected/reports"!</div>
}
