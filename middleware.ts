import authConfig from "./auth.config"
import NextAuth from "next-auth"
 

const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req) {

const isLogin = req.auth

console.log(isLogin)

  // Your custom middleware logic goes here
})


export const config = {
    matcher: [
      // Skip Next.js internals and all static files, unless found in search params
      '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
      // Always run for API routes
      '/(api|trpc)(.*)',
    ],
  }