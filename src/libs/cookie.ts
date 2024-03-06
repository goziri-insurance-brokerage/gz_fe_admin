import Cookies from "js-cookie";

const set = (name: string, value: string, options?: Cookies.CookieAttributes) =>
  Cookies.set(name, value);

const get = (name: string) => Cookies.get(name);

export const _cookies = { set, get };
