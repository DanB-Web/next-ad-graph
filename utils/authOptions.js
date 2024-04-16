import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: {
        params: {
          // Scopes required in token for MSGraph
          scope: "openid email profile User.Read",
        },
      },
    }),
  ],
  // Intercept callbacks here
  callbacks: {
    // Invoked on successful sign in
    async signIn(...args) {
      // console.log("Sign in args", args);
      // Return true to proceed with signin
      return true;
    },
    async jwt({ token, account, profile }) {
      // console.log("jwt", token, account, profile);
      // Add the recieved JWT to the token object on signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    // Modify session object if required
    async session({ session, token, user }) {
      // console.log("Session args", session, token, user);
      // Add access token to session
      session.accessToken = token.accessToken;
      return session;
    },
  },
};
