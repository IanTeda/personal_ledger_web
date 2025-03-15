//-- ./src/hooks/useCookie.tsx

/**
 * # Use Cookie Hook
 * 
 * https://github.com/SzJackiewicz/thebuggers/blob/main/src/hooks/useCookie.ts
 */

import { useCookies } from "react-cookie";

export default function useCookie() {
  const [cookies, setCookie, removeCookie] = useCookies();

  const get = (name: string) => {
    return cookies[name];
  };

  const set = (setName: string, setValue: unknown) => {
    setCookie(setName!, setValue!);
  };

  const remove = (removeName: string) => {
    removeCookie(removeName!);
  };

  return {
    get,
    set,
    remove,
  };
}
