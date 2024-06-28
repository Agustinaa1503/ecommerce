"use client";

import { SessionProvider } from "next-auth/react";

export function ProviderAuth({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}