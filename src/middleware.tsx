import { NextRequest, NextResponse } from "next/server";

export default function middleware(request) {
  console.log("🚀 ~ middleware ~ ̥:");

  try {
    const { accessToken } = request.cookies;

    if (!accessToken) {
      const redirectUrl = new URL(request.url);
      redirectUrl.pathname = "/";
      return NextResponse.redirect(redirectUrl);
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    const redirectUrl = new URL(request.url);
    redirectUrl.pathname = "/";
    return NextResponse.redirect(redirectUrl);
  }
}
export const config = {
    matcher: ["/profile", "/product"],
  };