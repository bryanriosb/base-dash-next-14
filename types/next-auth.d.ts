import NextAuth from "next-auth/next";
import { UserSession } from "./user"


declare module "next-auth" {
    interface Session {
        user: UserSession;
    }
}