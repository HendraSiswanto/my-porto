"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur border-b-[0.5px]">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
          Hendra<span className="text-gray-400">.</span>
        </Link>

        <div className="flex gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  pb-1
                  transition-all duration-200
                  ${
                    isActive
                      ? "text-gray-900 border-b-2 border-blue-500"
                      : "text-gray-500 border-b-2 border-transparent hover:text-gray-900 hover:border-gray-300"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
