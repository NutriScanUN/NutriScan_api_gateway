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
    getHistorials: (_, { id }, { dataSources }) => {
      return dataSources.listingAPI.getHistorialQuery(id);
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
    createHistorial: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.createHistorial(input);
        return {
          code: 200,
          success: true,
          message: "Historial successfully created!",
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
    createSearch: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.AddSearch(input);
        return {
          code: 200,
          success: true,
          message: "Search successfully created!",
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
    deleteHistorial: async (_, { id }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.deleteHistorial(id);
        return {
          code: 200,
          success: true,
          message: "historial deleted!",
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
    deleteSearch: async (_, { id }, { dataSources }) => {
      try {
        const response = await dataSources.historialAPI.deleteSearch(id);
        return {
          code: 200,
          success: true,
          message: "search deleted!",
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
  }
};
