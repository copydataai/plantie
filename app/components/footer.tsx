"use server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function Footer() {
    return (
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Friendly & Eco Friends</h3>
              <p className="text-muted-foreground">Growing happiness, one plant at a time.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Green Street</p>
                <p>Plant City, PC 12345</p>
                <p className="mt-2">hello@friendlyecofriends.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="/shop" className="hover:text-foreground transition-colors">Shop Plants</a></li>
                <li><a href="/care" className="hover:text-foreground transition-colors">Plant Care</a></li>
                <li><a href="/blog" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <Image src="/instagram.svg" width={24} height={24} alt="Instagram" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                  <Image src="/facebook.svg" width={24} height={24} alt="Facebook" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Pinterest">
                  <Image src="/pinterest.svg" width={24} height={24} alt="Pinterest" />
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="X">
                  <Image src="/x.svg" width={24} height={24} alt="X" />
                </a>
              </div>
              <div className="mt-6">
                <form className="flex">
                  <Input type="email" placeholder="Your email" className="rounded-r-none" />
                  <Button type="submit" className="rounded-l-none">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Friendly & Eco Friends. All rights reserved.</p>
          </div>
        </div>
      </footer>
      );
    }