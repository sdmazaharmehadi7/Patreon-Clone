import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import connectDb from '@/db/connectDb';
import User from '@/models/User';
import Payment from '@/models/Payment';
 

export const authoptions = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET
      }),
    ],
    callbacks: {
      async signIn({ user, account, profile }) {
        if (account.provider === "github") { 
          await connectDb()
          // Check if the user already exists in the database
          const currentUser = await User.findOne({ email: user.email }) 
          if (!currentUser) {
            // Create a new user
            const baseUsername = user.email ? user.email.split("@")[0] : (user.name || "user")
            const newUser = await User.create({
              email: user.email, 
              name: user.name || baseUsername,
              username: baseUsername, 
            })
            user.isNewUser = true
            user.username = newUser.username
          } else {
            user.isNewUser = false
            user.username = currentUser.username
          }
          return true
        }
        return true
      },
      async jwt({ token, user }) {
        if (user) {
          token.username = user.username
          token.isNewUser = user.isNewUser
        }
        return token
      },
      async session({ session, token }) {
        if (!session?.user?.email) return session
        try {
          await connectDb()
          const dbUser = await User.findOne({ email: session.user.email })
          if (dbUser) {
            session.user.name = dbUser.username
            session.user.username = dbUser.username
          }
          if (token) {
            session.user.isNewUser = token.isNewUser
          }
        } catch (error) {
          console.error("Session callback error:", error)
        }
        return session
      },
    },
    pages: {
      signIn: '/login',
    }
  })

  export { authoptions as GET, authoptions as POST}