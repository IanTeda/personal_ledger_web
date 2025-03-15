import { createFileRoute } from '@tanstack/react-router'
import Logger from '@/logger'
import { LoginForm } from '@/components/LoginForm'

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log: Logger = new Logger()

export const Route = createFileRoute('/_unprotected/login')({
  component: LoginRouteComponent,
})

function LoginRouteComponent() {
  log.silly('Login Route Component')

  return (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  )
}
