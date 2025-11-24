"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ingredients", label: "Ingredients" },
  { href: "/purchases", label: "Purchases" },
  { href: "/recipes-pos", label: "Recipes & POS" },
  { href: "/analytics", label: "Analytics" },
  { href: "/alerts", label: "Alerts" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:w-64 border-r bg-background">
      <nav className="flex flex-col gap-1 p-4 w-full">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition hover:bg-muted",
                active ? "bg-muted text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
