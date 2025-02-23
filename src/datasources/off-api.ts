import { RESTDataSource } from "@apollo/datasource-rest";
import { Off } from "../types";

export class OffAPI extends RESTDataSource {
  
  baseURL = "https://nutriscan-openfoodfacts-ms.onrender.com/";

  getOff(offId :String): Promise<Off[]> {
    return this.get<Off[]>("api/"+offId+"/all");
  }
}