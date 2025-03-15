import { createFileRoute } from '@tanstack/react-router'
import Logger from '@/logger'

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log: Logger = new Logger()

export const Route = createFileRoute("/_protected/account")({
  component: AccountRouteComponent,
  loader: () => ({
    crumb: "Account",
  }),
});

function AccountRouteComponent() {
  log.silly("Account Route Component")

  return <div>Hello "/_protected/account"!</div>
}
