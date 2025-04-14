import { Button } from "./shadcn_ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn_ui/card";
import Logger from "@/logger";
import { useAuthentication } from "@/contexts/AuthenticationProvider";

/**
 * ### Log Instance
 */
const log = new Logger();

export function LogOutCard() {
  log.silly("Logout Card");

  const { handleRefreshToken } = useAuthentication();

  // const navigate = useNavigate();

  const onLogoutClick = () => {
    log.debug("Login button click");
    handleRefreshToken();
    // handleLogout();
    // navigate({
    //   to: "/login",
    // });
  };

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
          <Button onClick={onLogoutClick} variant="secondary" className="w-full">
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

