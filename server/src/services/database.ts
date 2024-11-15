import { Airport } from "../models/airport";

import {airportData} from "../../../data/mockData";

const ad: Airport[] = airportData

export async function getAllAirports(): Promise<Airport[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(airportData);
        }, 300);
    });
};

export async function getAirportByID(airportID: number): Promise<Airport | undefined> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ad.find(a => a.AirportId === airportID));
        }, 300);
    });
}


