import {object, string, number, boolean, type InferOutput} from "valibot";



export const plantSchema = object({
    plantId: number(),
    name: string(),
    plantType: string(),
    price: number(),
    image: string(),
    isActive: boolean()
});

export type Plant = InferOutput<typeof plantSchema>;
