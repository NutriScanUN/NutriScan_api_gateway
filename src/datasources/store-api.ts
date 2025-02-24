import { RESTDataSource } from "@apollo/datasource-rest";
import { Store,CreateStoreInput,Product } from "../types";

export class StoreAPI extends RESTDataSource {
  
  baseURL = "http://store-ms:3005/";

    getStores(): Promise<Store[]> {
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
    getProducts(): Promise<Product[]> {
      return this.get<Product[]>("api/product/all");
    }
}