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

export default router;