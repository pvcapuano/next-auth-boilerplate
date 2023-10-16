"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionsProviderProps {
  children: ReactNode;
}

const NextAuthSessionProvider = ({
  children,
}: NextAuthSessionsProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthSessionProvider;
