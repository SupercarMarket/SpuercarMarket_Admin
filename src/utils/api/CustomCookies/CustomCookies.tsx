import { Cookies } from "react-cookie";
import { CookieSetOptions } from "../../../../node_modules/universal-cookie/cjs/types";

const cookie = new Cookies();

export const setCookie = (
  name: string,
  value: string,
  options: CookieSetOptions
) => {
  return cookie.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookie.get(name);
};
