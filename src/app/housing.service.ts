import { Injectable } from "@angular/core";
import { HousingLocationInfo } from "./housinglocation";

@Injectable({
  providedIn: "root",
})
export class HousingService {
  readonly baseUrl = "http://localhost:3000/locations";

  async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.baseUrl);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.baseUrl}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }
  
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
