import { Resolvers } from './types'
import { validateFullAmenities } from "./helpers";

export const resolvers: Resolvers = {
  Query: {
    featuredListings: (_, __, {dataSources}) => {
      return dataSources.listingAPI.getFeaturedListings();
    },
    listing: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getListing(id);
    },
    userQuery: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getUserQuery(id);
    },
    getStores: (_, __, {dataSources}) => {
      return dataSources.storeAPI.getStores();
    },
    getAllHistorialConsumption: (_, { id }, { dataSources }) => {
      return dataSources.historialAPI.getAllHistorialConsumption(id);
    },
    getHistorialConsumptionByDay: (_, { id , days }, { dataSources }) => {
      return dataSources.historialAPI.getHistorialConsumptionByDay(id,days);
    },
    getHistorialSearchWithLimit: (_, { uid , limit }, { dataSources }) => {
      return dataSources.historialAPI.getHistorialSearchWithLimit(uid,limit);
    },
    getAllHistorialSearch: (_, { uid }, { dataSources }) => {
      return dataSources.historialAPI.getAllHistorialSearch(uid);
    },
    getHistorialSearchByDay: (_, { uid , days }, { dataSources }) => {
      return dataSources.historialAPI.getHistorialSearchByDay(uid,days);
    },
    getProducts: (_, __, {dataSources}) => {
      return dataSources.storeAPI.getProducts();
    },
    getProductByStore: (_, { storeId }, {dataSources}) => {
      return dataSources.storeAPI.getProductsByStore(storeId);
    },
    getProduct: (_, { id }, {dataSources}) => {
      return dataSources.storeAPI.getProduct(id);
    },
    getStoreByUser: (_, { id }, {dataSources}) => {
      return dataSources.storeAPI.getStoreByUser(id);
    },
    getProductByUser: (_, { id }, {dataSources}) => {
      return dataSources.storeAPI.getProductByUser(id);
    },
    getGetProductAndStore: (_, { id }, {dataSources}) => {
      return dataSources.storeAPI.getProductAndStore(id);
    },
    getInfoOff: (_, { id }, {dataSources}) => {
      return dataSources.storeAPI.getInfoOff(id);
    },
    getProductsByName: (_, { name }, {dataSources}) => {
      return dataSources.storeAPI.getProductsByName(name);
    }
  },
  HistorialData: {
    __resolveType(obj) {
      if ('fecha_consumo' in obj) {
        return 'HistorialConsumption';
      }
      if ('fecha_busqueda' in obj) {
        return 'HistorialSearch';
      }
      return null;
    },
  },
  Listing: {
    amenities: ({ id, amenities }, _, { dataSources }) => {
      return validateFullAmenities(amenities)
        ? amenities
        : dataSources.listingAPI.getAmenities(id);
    }
  },
  Mutation: {
    createListing: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.listingAPI.createListing(input);
        return {
          code: 200,
          success: true,
          message: "Listing successfully created!",
          listing: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err.extensions.response.body}`,
          listing: null
        };
      }
    },
    createUser: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.listingAPI.createUser(input);
        return {
          code: 200,
          success: true,
          message: "user successfully created!",
          listing: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${JSON.stringify(err)}`,
          listing: null
        };
      }
    },
    updateUser: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.listingAPI.createUser(input);
        return {
          code: 200,
          success: true,
          message: "user successfully edited!",
          listing: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${JSON.stringify(err)}`,
          listing: null
        };
      }
    },
    createStore: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.storeAPI.createStore(input);
        return {
          code: 200,
          success: true,
          message: "Store successfully created!",
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${JSON.stringify(err)}`,
        };
      }
    },
    updateStore: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.storeAPI.updateStore(input);
        return {
          code: 200,
          success: true,
          message: "Store successfully created!",
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${JSON.stringify(err)}`,
        };
      }
    },
    createProduct: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.storeAPI.createProduct(input);
        return {
          code: 200,
          success: true,
          message: "Product successfully created!",
          listing: response
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${err.extensions.response.body}`,
          listing: null
        };
      }
    },
    deleteStore: async (_, { id }, { dataSources }) => {
      try {
        const response = await dataSources.storeAPI.deleteStore(id);
        return {
          code: 200,
          success: true,
          message: "store deleted!",
        };
      } catch (err) {
        return {
          code: 500,
          success: false,
          message: `Something went wrong: ${JSON.stringify(err)}`,
        };
      }
    },
    addHistorialConsumption: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.addHistorialConsumption(input);
        return response;
      } catch (error) {
        console.error("Error fetching create consumption:", error);
        throw new Error("Failed to fetch  create consumption");
      }
    },
    addHistorialSearch: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.addHistorialSearch(input);
        return response;
      } catch (error) {
        console.error("Error fetching create search:", error);
        throw new Error("Failed to fetch  create search");
      }
    },
    deleteHistorialConsumption: async (_, { uid,recordId }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.deleteHistorialConsumption(uid,recordId);
        return response;
      } catch (error) {
        console.error("Error fetching delete consumption:", error);
        throw new Error("Failed to fetch  delete consumption");
      }
    },
    deleteHistorialSearch: async (_, { uid,recordId }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.deleteHistorialSearch(uid,recordId);
        return response;
      } catch (error) {
        console.error("Error fetching delete search:", error);
        throw new Error("Failed to fetch  delete search");
      }
    },
  }
};
