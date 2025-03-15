import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute("/_protected/tags")({
  component: TagsRouteComponent,
  loader: () => ({
    crumb: "Tags",
  }),
});

function TagsRouteComponent() {
  return <div>Hello "/_protected/tags"!</div>
}
