import NextAuth from 'next-auth'
import CognitoProvider from "next-auth/providers/cognito";

export default NextAuth({
    providers: [
        CognitoProvider({
            clientId: process.env.COGNITO_CLIENT_ID,
            clientSecret: process.env.COGNITO_CLIENT_SECRET,
            domain: process.env.COGNITO_DOMAIN,
            issuer: process.env.COGNITO_ISSUER,
            idToken: true
        })
    ],
session: { jwt: true },
callbacks: {
  async jwt({ token, account }) {
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  },
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.accessToken = token.accessToken
    return session
  }
}  
 })
 