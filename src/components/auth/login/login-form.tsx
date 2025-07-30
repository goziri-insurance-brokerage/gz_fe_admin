"use client";

import { LoginIdentifier } from "@/@Types/auth.interface";
import { useLoginMutation } from "@/apis/auth.api";
import config from "@/config/config";
import { useFormSubmit } from "@/hooks/useFormSubmit";
import { _cookies } from "@/libs/cookie";
import { Input, Button, useToast } from "@/ui";
import { Inputs } from "@/ui/inputs/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const router = useRouter();
  const { callToast } = useToast();
  const [login, { isLoading }] = useLoginMutation();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleFormSubmit = async (formData: Record<string, string>) => {
    setIsLoggingIn(true);
    const { password, identifier: identifier_value } = formData;

    setTimeout(() => {
      if (
        identifier_value === "theophilus.ukuyoma@goziri.com" &&
        password === "@Password1234"
      ) {
        router.push("/dashboard");
      } else {
        callToast("error", "Login Failed", "Invalid Login Credentials");
      }
      setIsLoggingIn(false);
    }, 3000);

    // const response: Record<string, any> = await login({
    //   password,
    //   identifier: LoginIdentifier.EMAIL,
    //   identifier_value,
    // });

    // if (response.error) {
    //   callToast("error", "Login Failed", response.error.data?.message);
    // }

    // if (response.data) {
    //   const tokenExpires = config().tokenExpireAtMs;
    //   _cookies.set("token", response.data.access_token);
    //   tokenExpires &&
    //     _cookies.set(
    //       "token_expiration",
    //       `${parseInt(tokenExpires) + Date.now()}`
    //     );

    //   callToast("success", "Welcome", "Successfully Authenticated");
    //   router.push("/");
    // }
  };

  const submitForm = useFormSubmit(
    ["password", "identifier"],
    handleFormSubmit
  );

  return (
    <form action="" onSubmit={submitForm} className="grid gap-5">
      <Input
        id="login-form-indentifier"
        label="Username/ Email Address"
        name="identifier"
        placeholder="example@gmail.com"
        required
        type={Inputs.Email}
      />

      <Input
        id="login-form-password"
        label="Password"
        name="password"
        required
        type={Inputs.Password}
      />

      <Button
        className="mt-5"
        color="primary"
        type="submit"
        variant="contained"
        isLoading={isLoggingIn}
        disabled={isLoggingIn}
      >
        Login
      </Button>
    </form>
  );
}
