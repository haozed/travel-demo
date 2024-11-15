import { Router, Request, Response } from "express";
import { getAllAirports, getAirportByID, getAirportByIATA, addAirport, updateAirport, deleteAirportByID } from "../services/database";

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

router.post('/', async (req: Request, res: Response) => {
    const newAirport: Omit<Airport, 'AirportId'> = req.body;
    try {
        await addAirport(newAirport);
        res.status(202).json({ message: `New airport with name ${newAirport.AirportName} added` });
    } catch (error) {
        res.status(500).json({ message: "Error adding airport" });
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    const updatedAirport: Airport = req.body;
    const id = parseInt(req.params.id);
    if (updatedAirport.AirportId != id) {
        res.status(405).json({ message: "You can not update the ID of airport!" });
        return;
    }
    try {
        await updateAirport(updatedAirport);
        res.status(203).json({ message: `Airport with ID ${updatedAirport.AirportId} has been updated` });
    } catch (error) {
        res.status(500).json({ message: "Error updating airport" });
    }
})

router.delete('/:id', async (req:Request, res:Response) => {
    const id = parseInt(req.params.id);
    try {
        await deleteAirportByID(id);
        res.status(204).json({ message: `Airport with ID ${id} has been deleted` });
    } catch(error) {
        res.status(500).json({ message: "Error deleting airport" });
    }
})

export default router;