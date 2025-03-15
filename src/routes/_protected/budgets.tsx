import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/budgets")({
  component: BudgetRouteComponent,
  loader: () => ({
    crumb: "Budgets",
  }),
});

function BudgetRouteComponent() {
  return <div>Hello "/_protected/budgets"!</div>
}
