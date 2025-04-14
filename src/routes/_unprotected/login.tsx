import { createFileRoute, redirect } from '@tanstack/react-router'
import Logger from '@/logger'
import { LoginForm } from '@/components/LoginForm'
import { z } from "zod";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log: Logger = new Logger();

export const Route = createFileRoute("/_unprotected/login")({
  // Validate url search parameters passed
  validateSearch: z.object({
    redirect: z.string().optional().catch(""),
  }),
  beforeLoad: ({ context, search }) => {
    // If authenticated already redirect to page they came from
    if (context.authentication.token) {
      throw redirect({ to: search.redirect || "/" });
    }
  },
  component: LoginRouteComponent,
});

function LoginRouteComponent() {
  log.silly('Login Route Component')

  const { redirect: route_redirect } = Route.useSearch();
  
  log.silly("Redirect is: ", route_redirect);

  return (
    <div className="w-full max-w-sm">
      <LoginForm />
    </div>
  );
}
