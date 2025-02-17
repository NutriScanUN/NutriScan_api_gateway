import { RESTDataSource } from "@apollo/datasource-rest";
import { Store,CreateStoreInput } from "../types";

export class HistorialAPI extends RESTDataSource {
  
  baseURL = "https://nutriscan-historial-ms.onrender.com/";

    getHistorial(userId :String): Promise<Store[]> {
      return this.get<Store[]>("api/consumption-history/"+userId+"/all");
    }
    createStore(store: CreateStoreInput): Promise<any> {
        return this.post<any>("/api/store", {
          body: store
        });
    }
    deleteStore(storeId: string): Promise<any> {
        return this.delete<any>(`/api/store/${storeId}`);
      }

}