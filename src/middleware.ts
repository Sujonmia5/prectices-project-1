import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/authServices";
type role = "USER" | "ADMIN";

const roleBaseRoutes: Record<role, RegExp[]> = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/],
};

const authRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBaseRoutes[user?.role as role]) {
    const routes = roleBaseRoutes[user?.role as role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    "/profile",
    "/profile/:path*",
    "/admin/:path*",
    "/login",
    "/register",
    "/admin",
  ],
};
