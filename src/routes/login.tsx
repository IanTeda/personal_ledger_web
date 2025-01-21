import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '@/components/LoginForm'

// This is the login route. It is responsible for rendering the login form.
export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}
