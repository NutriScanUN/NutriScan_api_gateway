import { ListingAPI } from "./datasources/listing-api";
import { StoreAPI } from "./datasources/store-api";
import { HistorialAPI } from "./datasources/historial-api";
import { OffAPI } from "./datasources/off-api";

export type DataSourceContext = {
  dataSources: {
    listingAPI: ListingAPI;
    storeAPI: StoreAPI;
    historialAPI: HistorialAPI;
    offAPI: OffAPI;
  };
};