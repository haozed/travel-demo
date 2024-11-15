import { Router, Request, Response } from "express";
import { getAllAirports, getAirportByID, getAirportByIATA } from "../services/database";

import { Airport } from "../models/airport";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const IATAcode = req.query.IATAcode as string;
    if (IATAcode) {
        const airport = await getAirportByIATA(IATAcode);
        res.json(airport);
        return;
    } else {
        const airports = await getAllAirports();
        res.json(airports);
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const airport = await getAirportByID(id);
        if (airport) {
            res.status(200).json(airport);
        } else {
            res.status(404).json({ message: `No airport found with ID: ${id}`});
        }
    } 
    catch (error){
        res.status(500).json({ message: "Error fetching airport"});
    }
});

export default router;