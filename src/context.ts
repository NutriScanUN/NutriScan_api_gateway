import { ListingAPI } from "./datasources/listing-api";
import { StoreAPI } from "./datasources/store-api";

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingAPI;
    storeAPI: StoreAPI;
  };
};