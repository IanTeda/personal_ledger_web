import { NotebookText } from "lucide-react";
import { cn } from "~/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Link } from "react-router";

export default function LogoutPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <NotebookText className="size-4" />
          </div>
          Personal Ledger.
        </a>
        <div className={cn("flex flex-col gap-6")}>
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Logged Out</CardTitle>
              <CardDescription>
                You have been logged out of Personal Ledger
              </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6">
                    <Link to={"/login"} className="ml-auto text-sm underline-offset-4 hover:underline">
                        Log back in
                    </Link>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
