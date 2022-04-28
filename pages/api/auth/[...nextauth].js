import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
   
    GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        httpOptions: {
          timeout: 40000,
        },    
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        httpOptions: {
          timeout: 40000,
        },
      })

    // ...add more providers here
  ],
 theme: {
   colorScheme: "dark"
 },
  
  // callbacks: {
  //     async jwt({ token }) {
  //       token.userRole = "commenter"
  //       return token
  //     },
  //   },
  
    
})