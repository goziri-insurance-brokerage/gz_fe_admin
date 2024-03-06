import LoginForm from "@/components/auth/login/login-form";
import React from "react";

export default function page() {
  return (
    <main className="w-full h-full bg-white flex items-center">
      <div className="w-full max-w-md mx-auto grid gap-10">
        <div className="font-semibold ">
          <h2 className="text-[40px]">Welcome back!</h2>
          <p>Please login to access your account</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
