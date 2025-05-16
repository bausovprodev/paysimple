"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Merchants", href: "/merchants" },
  { label: "History", href: "/history" },
  { label: "Settings", href: "/settings" }
];

export function NavigationBar() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 items-center">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            href={item.href}
            key={item.href}
            className={`text-base font-medium px-1 transition border-b-2 ${
              isActive
                ? "border-[#33e2ce] text-black"
                : "border-transparent text-neutral-400 hover:text-black"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
