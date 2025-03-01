import { RESTDataSource } from "@apollo/datasource-rest";
import { ProductoOff } from "../types";

export class OffAPI extends RESTDataSource {
  
  baseURL = "http://openfoodfacts-ms:3004/";

}