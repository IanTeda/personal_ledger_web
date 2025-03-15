import { useNavigate } from "@tanstack/react-router";
import { Button } from "./shadcn_ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn_ui/card";
import Logger from "@/logger";

/**
 * ### Log Instance
 */
const log = new Logger()

export function LogOutCard() {
  log.silly(
    "Logout Card"
  )
  const navigate = useNavigate();

  const onLoginClick = () => {
    log.debug("Login button click");
    navigate({
      to: "/login"
    });
  }

  return (
    <div className={"flex flex-col gap-6"}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Logged Out</CardTitle>
          <CardDescription>
            You have been logged out from Persona Ledger
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={onLoginClick} variant="secondary" className="w-full">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
