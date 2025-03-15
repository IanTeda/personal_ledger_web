import { createFileRoute } from '@tanstack/react-router'
import Logger from '@/logger'
import { LogOutCard } from '@/components/LogoutCard'

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log: Logger = new Logger()

export const Route = createFileRoute('/_unprotected/logout')({
  component: LogoutRouteComponent,
})

function LogoutRouteComponent() {
  log.silly('Logout Route Component')

  return <LogOutCard />
}
