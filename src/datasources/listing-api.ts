import { RESTDataSource } from "@apollo/datasource-rest";
import { Listing, Amenity, CreateListingInput, CreateUserInput, UserQuery, User, CreateUserResponse } from "../types";

export class ListingAPI extends RESTDataSource {
  
  baseURL = "http://user-ms:3001/";
  
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

  deleteUser(userId: string): Promise<UserQuery> {
    return this.delete<UserQuery>(`/api/users/${userId}`);
  }

  createListing(listing: CreateListingInput): Promise<Listing> {
    return this.post<Listing>("listings", {
      body: { listing }
    });
  }
  createUser(user: CreateUserInput): Promise<any> {
    return this.post<any>("/api/users", {
      body: user
    });
  }
}