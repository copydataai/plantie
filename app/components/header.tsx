"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.webp" alt="Plantie Logo" width={32} height={32} />
            <span className="font-bold text-xl text-primary">Plantie</span>
          </Link>
          <nav className="hidden md:flex items-center ml-8 space-x-6">
            <Link href="/shop" className="text-foreground/80 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link href="/care" className="text-foreground/80 hover:text-primary transition-colors">
              Plant Care
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-foreground/80 hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
}
