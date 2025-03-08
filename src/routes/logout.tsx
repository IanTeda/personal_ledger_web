import { createFileRoute } from '@tanstack/react-router'
import Logger from "@/logger";

// Create a new logger object
const log = new Logger();

export const Route = createFileRoute('/logout')({
  component: RouteComponent,
})

function RouteComponent() {
  log.debug("Hello /logout")

  return (
    <div>Hello "/logout"!</div>
  )
}
