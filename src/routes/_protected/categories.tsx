import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/categories")({
  component: CategoriesRouteComponent,
  loader: () => ({
    crumb: "Categories",
  }),
});

function CategoriesRouteComponent() {
  return <div>Hello "/_protected/categories"!</div>
}
