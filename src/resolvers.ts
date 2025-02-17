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
    }
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
    createStore: async (_, { input }, { dataSources }) => {
      try {
        const response = await dataSources.storeAPI.createStore(input);
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
    
  },
};
