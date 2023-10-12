import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://example.com"]
    : ["http://localhost:3000", "https://www.google.com"];

export function middleware(request: Request) {
  const regex = new RegExp("/api/.*");

  if (regex.test(request.url)) {
  }

  console.log("middleware");
  console.log(request.url);
  console.log(request.method);

  const origin = request.headers.get("origin");
  console.log(origin);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
