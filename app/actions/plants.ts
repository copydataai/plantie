"use server";
import { plants } from "@/server/db/schema/plants";
import db from "@/server/db"


export async function getPlants() {
    const allplants = await db.select().from(plants);
    console.log(allplants);
    return allplants;
}

