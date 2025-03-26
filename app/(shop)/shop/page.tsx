// app/(shop)/shop/page.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getPlants } from "@/app/actions/plants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { Plant } from "@/server/validations/plants";

const plantCategories = [
  "All Plants",
  "Indoor",
  "Outdoor",
  "Succulents",
  "Air Plants",
  "Tropical",
];


export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Plants");
  const [searchQuery, setSearchQuery] = useState("");
  const [plants, setPlants] = useState<Plant[]>([]);

  const filteredPlants = plants.filter((plant) => {
    const matchesCategory = selectedCategory === "All Plants" || plant.plantType === selectedCategory;
    const matchesSearch = plant.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const fetchPlants = async () => {
      const allPlants = await getPlants();
      console.log(allPlants)
      setPlants(allPlants);
    };
    fetchPlants();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop Plants</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Search</h2>
            <Input 
              type="text" 
              placeholder="Search plants..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          
        </aside>
        
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlants.length > 0 ? (
              filteredPlants.map((plant) => (
                <div key={`${plant.plantId}-plant-${plant.name}`} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src={plant.image}
                      alt={plant.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{plant.name}</h3>
                    <p className="text-primary font-semibold mt-1">${plant.price}</p>
                    <Button className="w-full mt-3">Add to Cart</Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">No plants found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
