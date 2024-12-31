import authConfig from "./auth.config";
import NextAuth from "next-auth";


import {auth} from './auth'

// const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLogin = !!req.auth;

  console.log("user login : ", isLogin);

  // Your custom middleware logic goes here
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
