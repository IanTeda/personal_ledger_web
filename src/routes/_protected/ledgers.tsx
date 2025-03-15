import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/ledgers")({
  component: LedgersRouteComponent,
  loader: () => ({
    crumb: "Ledgers",
  }),
});

function LedgersRouteComponent() {
  return <div>Hello "/_protected/ledgers"!</div>
}
