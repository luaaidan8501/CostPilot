"use client";

import { usePathname } from "next/navigation";

const TITLES: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/ingredients": "Ingredients",
  "/purchases": "Purchases",
  "/recipes-pos": "Recipes & POS",
  "/analytics": "Analytics",
  "/alerts": "Alerts",
};

function getTitle(pathname: string) {
  for (const [path, title] of Object.entries(TITLES)) {
    if (pathname.startsWith(path)) return title;
  }
  return "CostPilot";
}

export function TopBar() {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <header className="flex items-center justify-between border-b bg-background px-4 py-3">
      <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
      {/* Placeholder for future user menu / actions */}
    </header>
  );
}
