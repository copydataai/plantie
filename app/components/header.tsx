"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth-client";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const session = await getSession();
      if (!session.data && !session.error) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
    };
    checkAuth();
  }, []);
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
          {/* Check if user is logged in */}
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/cart">My Cart</Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/account">My Account</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
