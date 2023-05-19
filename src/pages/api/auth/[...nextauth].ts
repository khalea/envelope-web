import NextAuth from "next-auth";
import { authOptions } from "~/server/auth";

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export default NextAuth(authOptions);
