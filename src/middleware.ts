import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // if (
  //   !req.cookies.has("token") ||
  //   parseInt(req.cookies.get("token_expiration")?.value || "") - Date.now() < 0
  // ) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/admin/:path*",
    "/contracts/:path*",
    "/hcp/:path*",
    "/hmo/:path*",
    "/orgs/:path*",
    "/users/:path*",
  ],
};
