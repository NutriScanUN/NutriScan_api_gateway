import { RESTDataSource } from "@apollo/datasource-rest";
import { Store,CreateStoreInput } from "../types";

export class StoreAPI extends RESTDataSource {
  
  baseURL = "https://nutriscan-store-ms.onrender.com/";

    getStores(): Promise<Store[]> {
        console.log("getStore");
      return this.get<Store[]>("api/store/all");
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