import { Router, Request, Response } from "express";
import { getAllCities, getCityByID, getCityByName } from "../services/database";

import { City } from "../models/city";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const name = req.query.name as string;
    if (name) {
        const city = await getCityByName(name);
        res.json(city);
        return;
    } else {
        const cities = await getAllCities();
        res.json(cities);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const city = await getCityByID(id);
        if (city) {
            res.status(200).json(city);
        } else {
            res.status(404).json({ message: `No city found with ID: ${id}`});
        }
    } 
    catch (error){
        res.status(500).json({ message: "Error fetching city"});
    }
});

export default router;