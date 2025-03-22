// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../../../../server/config/db";
import Patient from "../../../../../../server/models/patient";
import bcrypt from "bcryptjs";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await connectDB();
        // Find the user with the provided email
        const user = await Patient.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("No user found with that email");
        }
        // Compare the provided password with the hashed password in the DB
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }
        return user;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = { id: token.id, email: token.email };
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin"
  }
});
