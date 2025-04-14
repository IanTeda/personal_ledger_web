//-- ./src/components/AuthProvider.tsx

/**
 *
 * https://github.com/mangelini/todo-frontend/blob/master/src/components/AuthProvider.tsx
 * https://dev.to/miracool/how-to-manage-user-authentication-with-react-js-3ic5
 * https://github.com/psychvc/code/blob/master/videos/long/role-based-authentication-in-react/src/components/AuthProvider.tsx
 * https://github.com/TanStack/router/tree/main/examples/react/authenticated-routes
 */

// import { User } from "@/domains/user";
import { User } from "@/domains/user";
import Logger from "@/logger";
import { sendAuthenticationRequest, sendRefreshTokenRequest } from "@/services/authentication";
import { createContext, PropsWithChildren, useContext, useState } from "react";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger();

export interface AuthenticationContext {
  token?: string | null;
  currentUser?: User | null;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  handleRefreshToken: () => Promise<void>;
};
 
const AuthenticationContext = createContext<AuthenticationContext | undefined>(undefined);

type AuthenticationProviderProps = PropsWithChildren;

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [token, setToken] = useState<string | null>();
  const [currentUser, setCurrentUser] = useState<User | null>();

  // useEffect(() => {
  //   async function fetchUser() {
  //     try {
  //       const { accessToken } = await sendAuthenticationRequest(
  //         email,
  //         password
  //       );

  //       setAuthToken(accessToken);
  //       // setCurrentUser(user);
  //     } catch {
  //       setAuthToken(null);
  //       // setCurrentUser(null);
  //     }
  //   }

  //   fetchUser();
  // }, []);

  async function handleRefreshToken() {
    log.silly("Handle refresh token request");
    try {
      const { accessToken, user: userResponse } = await sendRefreshTokenRequest();
      
      if (!userResponse) {
        throw new Error("User response is undefined");
      }

      const user: User = {
        id: userResponse.id,
        email: userResponse.email,
        role: userResponse.role,
      };

      setToken(accessToken);
      setCurrentUser(user);
    } catch {
      log.silly("Error handle login request.");
      setToken(null);
      setCurrentUser(null);
    }
  }

  async function handleLogin(email: string, password: string) {
    log.silly("Handle login request");
    try {

      const {accessToken, user } = await sendAuthenticationRequest(email, password);

      setToken(accessToken);
      setCurrentUser(user);
    } catch {
      log.silly("Error handle login request.")
      setToken(null);
      setCurrentUser(null);
    }
  }

  async function handleLogout() {
    log.silly("Handle authentication logout.")
    setToken(null);
    // setCurrentUser(null);
    
  }

  return (
    <AuthenticationContext.Provider
      value={{
        token,
        currentUser,
        handleLogin,
        handleLogout,
        handleRefreshToken,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuthentication() {
  const context = useContext(AuthenticationContext);

  if (context === undefined) {
    throw new Error("useAuth must be used inside of a AuthProvider");
  }

  return context;
}