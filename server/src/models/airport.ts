export interface Airport {
    AirportId: number;
    AirportName: string;
    IATACode?: string;
    ICAOCode: string;
    Longitude: number;
    Latitude: number;
    CityId: number;
}