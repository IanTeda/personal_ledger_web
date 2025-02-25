//-- ./src/components/LoginForm.tsx

// # Login Form
//
// Login form for user authentication
//
// ## For Testing
//
// email: default_ams@teda.id.au
// password: S3cret-Admin-Pas$word!
//
// ## References
//
// 1. [Nv4n/idea-board-spring-boot](https://github.com/Nv4n/idea-board-spring-boot/blob/master/src/react/src/components/board/CreateNoteForm.tsx)
// 2. [](https://github.com/ysmello/react-tanstack-auth/blob/main/src/state/queries/sign-in.ts)

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form";
import { useAuthenticationMutation } from "@/queries/authentication";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {

  // Reference mutation hook
  const mutation = useAuthenticationMutation();

  const form = useForm({
    // Set default form values
    defaultValues: {
      email: "default_ams@teda.id.au",
      // cSpell:ignore S3cret
      password: "S3cret-Admin-Pas$word!",
    },

    // Form submission handler
    onSubmit: async ({ value }) => {
      // Call the mutation hook
      await mutation.mutateAsync({
        email: value.email,
        password: value.password,
      });
    },
  });

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <div className="grid gap-2">
              <form.Field
                name="email"
                children={(field) => (
                  <>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                    />
                  </>
                )}
              />
            </div>

            <div className="grid gap-2">
              <form.Field
                name="password"
                children={(field) => (
                  <>
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>

                    <Input
                      id="password"
                      type="password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      required
                    />
                  </>
                )}
              />
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
      <div>
        {/* <pre>{data?.accessToken}</pre> */}
      </div>
    </div>
  );
}
