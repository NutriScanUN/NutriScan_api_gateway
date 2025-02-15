import { RESTDataSource } from "@apollo/datasource-rest";
import { Store } from "../types";

export class StoreAPI extends RESTDataSource {
  
  baseURL = "https://nutriscan-store-ms.onrender.com/";

    getStores(): Promise<Store[]> {
        console.log("getStore");
      return this.get<Store[]>("api/store/all");
    }

}