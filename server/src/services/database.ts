import { Airport } from "../models/airport";
import { City } from "../models/city";

import { airportData, cityData } from "../../../data/mockData";

const ad: Airport[] = airportData
const cd: City[] = cityData

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

export async function getAirportByIATA(code: string): Promise<Airport[]> {
    const queryCode = code.toLowerCase();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ad.filter(a => a.IATACode.toLowerCase().includes(queryCode)));
      }, 300);
    });
  }

  export async function getAllCities(): Promise<City[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cityData);
        }, 300);
    });
};

export async function getCityByID(cityId: number): Promise<City | undefined> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cd.find(c => c.CityId === cityId));
        }, 300);
    });
}

export async function getCityByName(name: string): Promise<City[]> {
    const queryName = name.toLowerCase();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cd.filter(c => c.Name.toLowerCase().includes(queryName)));
      }, 300);
    });
  }

export async function addAirport(airport: Omit<Airport, 'AirportId'>): Promise<void> {
return new Promise((resolve) => {
    setTimeout(() => {
    const maxAirportId = ad.length > 0 ? Math.max(...ad.map(a => a.AirportId)) : 0;
    const newAirport: Airport = {
        AirportId: maxAirportId + 1,
        ...airport,
    };
    ad.push(newAirport);
    resolve();
    }, 300);
});
}

export async function updateAirport(airport: Airport): Promise<void> {
return new Promise((resolve) => {
    setTimeout(() => {
    const index = ad.findIndex(a => a.AirportId === airport.AirportId);
    if (index >= 0) {
        ad[index] = airport;
    }
    resolve();
    }, 300);
});
}

export async function deleteAirportByID(airportId: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const index = ad.findIndex(a => a.AirportId === airportId);
        if (index >= 0) {
          ad.splice(index, 1);
        }
        resolve();
      }, 300);
    });
  }