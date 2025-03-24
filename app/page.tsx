"use server";
import Image from "next/image";
import { Heart, Leaf, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <Image 
          src="/hero-plants.webp" 
          alt="Lush greenery and houseplants" 
          fill 
          className="object-cover z-0" 
          priority 
        />
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="container mx-auto px-8 relative z-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Grow Green, Live Kind.</h1>
            <p className="text-xl md:text-2xl">Friendly & Eco-Friendly Plants Delivered.</p>
            <Button size="lg" className="mt-8 rounded-full">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
              <p>We're committed to eco-friendly growing methods that respect our planet.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plant Health First</h3>
              <p>Every plant is nurtured with care before finding its way to your home.</p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Locally Sourced</h3>
              <p>We partner with local growers to reduce our carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Find Your Perfect Green Friend</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative rounded-xl overflow-hidden h-80 cursor-pointer">
              <Image src="/succulents.webp" fill className="object-cover transition-transform group-hover:scale-105" alt="Succulent plants" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">Succulents</h3>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden h-80 cursor-pointer">
              <Image src="/tropicals.webp" fill className="object-cover transition-transform group-hover:scale-105" alt="Tropical plants" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">Tropicals</h3>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden h-80 cursor-pointer">
              <Image src="/air-plants.webp" fill className="object-cover transition-transform group-hover:scale-105" alt="Air plants" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">Air Plants</h3>
              </div>
            </div>
            <div className="group relative rounded-xl overflow-hidden h-80 cursor-pointer">
              <Image src="/beginner-plants.webp" fill className="object-cover transition-transform group-hover:scale-105" alt="Beginner-friendly plants" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <h3 className="text-white text-xl font-semibold p-6">Beginner-Friendly</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image src="/eco-packaging.webp" width={600} height={400} className="rounded-xl object-cover" alt="Eco-friendly packaging" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Our Commitment to Sustainability</h2>
              <p className="mb-4">At Friendly & Eco Friends, we believe in nurturing not just our plants, but our planet too. Our commitment to sustainability guides everything we do.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>100% biodegradable and recyclable packaging</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Organic fertilizers and pest control methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Water conservation practices in all our growing facilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <span>Carbon-neutral shipping options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-6">Ready to Bring Nature Home?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Discover our carefully curated collection of plants and accessories that bring joy, health, and beauty to your space.</p>
          <Button variant="secondary" size="lg" className="rounded-full" asChild>
            <a href="/shop">Explore Our Collection</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
