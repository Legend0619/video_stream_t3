import NextAuth from "next-auth";

import { authOptions } from "yarn/server/auth";

export default NextAuth(authOptions);
