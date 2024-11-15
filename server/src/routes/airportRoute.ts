import { Router, Request, Response } from "express";
import { getAllAirports, getAirportByID } from "../services/database";

import { Airport } from "../models/airport";

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const airports = await getAllAirports();
    res.json(airports);
});  

export default router;