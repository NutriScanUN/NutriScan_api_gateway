import { RESTDataSource } from "@apollo/datasource-rest";
import { Off } from "../types";

export class OffAPI extends RESTDataSource {
  
  baseURL = "http://openfoodfacts-ms:3004/";

  getOff(offId :String): Promise<Off[]> {
    return this.get<Off[]>("api/"+offId+"/all");
  }
}