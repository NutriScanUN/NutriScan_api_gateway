import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing, Amenity, CreateListingInput, UserQuery } from "../types";

export class ListingAPI extends RESTDataSource {
  
  baseURL = "https://nutriscan-api-gateway.onrender.com/api/users/";
  
  getFeaturedListings(): Promise<Listing[]> {
    return this.get<Listing[]>("featured-listings");
  }
  
  getListing(listingId: string): Promise<Listing> {
    return this.get<Listing>(`listings/${listingId}`);
  }
  
  getAmenities(listingId: string): Promise<Amenity[]> {
    return this.get<Amenity[]>(`listings/${listingId}/amenities`);
  }
  
  getUserQuery(userId: string): Promise<UserQuery> {
    return this.get<UserQuery>(`/api/users/${userId}`);
  }

  createListing(listing: CreateListingInput): Promise<Listing> {
    return this.post<Listing>("listings", {
      body: { listing }
    });
  }
}