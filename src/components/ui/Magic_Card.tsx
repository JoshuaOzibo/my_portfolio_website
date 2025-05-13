"use client";

import { MagicCard } from "@/components/magicui/magic-card";

export default function Magic_Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MagicCard>{children}</MagicCard>;
}
