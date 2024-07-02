"use client";

import { useLogoutMutation } from "@/apis/auth.api";
import { _cookies } from "@/libs/cookie";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    const response: Record<string, any> = await logout(undefined);
    if (response.error) {
      console.log(response);
      return;
    }
    _cookies.set("token_expiration", `${Date.now()}`);
    router.push("/login");
  };

  return { logout: handleLogout, loggingOut: isLoading };
}
