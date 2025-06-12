// components/ui/I18nProvider.tsx
"use client";
import "@/lib/i18n"; // This ensures i18n is initialized ONLY on the client

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
