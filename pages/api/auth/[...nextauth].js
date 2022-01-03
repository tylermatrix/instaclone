import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "294225086771-5pgc2mo6t9ulb26rg7tkolvagtk123vq.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
