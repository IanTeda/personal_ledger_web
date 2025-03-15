import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/payees")({
  component: PayeesRouteComponent,
  loader: () => ({
    crumb: "Payees",
  }),
});

function PayeesRouteComponent() {
  return <div>Hello "/_protected/vendors"!</div>
}
