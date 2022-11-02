import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github"
// import AppleProvider from "next-auth/providers/apple";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,

  // ...
});

// GithubProvider({
//   clientId: process.env.GITHUB_ID,
//   clientSecret: process.env.GITHUB_SECRET,
// }),
// ,
//   AppleProvider({
//     clientId: process.env.APPLE_ID,
//     clientSecret: process.env.APPLE_SECRET
//   })
