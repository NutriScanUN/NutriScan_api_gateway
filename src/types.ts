import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Amenity = {
  __typename?: 'Amenity';
  /** The amenity category the amenity belongs to */
  category: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The amenity's name */
  name: Scalars['String']['output'];
};

export type CreateListingInput = {
  /** The Listing's amenities */
  amenities: Array<Scalars['ID']['input']>;
  /** Indicates whether listing is closed for bookings (on hiatus) */
  closedForBookings?: InputMaybe<Scalars['Boolean']['input']>;
  /** The cost per night */
  costPerNight: Scalars['Float']['input'];
  /** The listing's description */
  description: Scalars['String']['input'];
  /** The number of beds available */
  numOfBeds: Scalars['Int']['input'];
  /** The listing's title */
  title: Scalars['String']['input'];
};

export type CreateListingResponse = {
  __typename?: 'CreateListingResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** The newly created listing */
  listing?: Maybe<Listing>;
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

export type CreateStoreInput = {
  descripcion?: InputMaybe<Scalars['String']['input']>;
  direccion?: InputMaybe<Scalars['String']['input']>;
  fecha_suscripcion?: InputMaybe<Scalars['String']['input']>;
  fotos?: InputMaybe<Scalars['String']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  tienda_id: Scalars['ID']['input'];
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  fecha_nacimiento: Scalars['String']['input'];
  fecha_registro: Scalars['String']['input'];
  nombres: Scalars['String']['input'];
  rol: Scalars['String']['input'];
  uid: Scalars['String']['input'];
  url_imagen: Scalars['String']['input'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  /** Similar to HTTP status code, represents the status of the mutation */
  code: Scalars['Int']['output'];
  /** Human-readable message for the UI */
  message: Scalars['String']['output'];
  /** Indicates whether the mutation was successful */
  success: Scalars['Boolean']['output'];
};

/** A particular intergalactic location available for booking */
export type Listing = {
  __typename?: 'Listing';
  /** The amenities available for this listing */
  amenities: Array<Amenity>;
  /** Indicates whether listing is closed for bookings (on hiatus) */
  closedForBookings?: Maybe<Scalars['Boolean']['output']>;
  /** The cost per night */
  costPerNight?: Maybe<Scalars['Float']['output']>;
  /** The listing's description */
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The number of beds available */
  numOfBeds?: Maybe<Scalars['Int']['output']>;
  /** The listing's title */
  title: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new listing */
  createListing: CreateListingResponse;
  createStore: CreateUserResponse;
  /** creates a user */
  createUser: CreateUserResponse;
  deleteStore: CreateUserResponse;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  /** A curated array of listings to feature on the homepage */
  featuredListings: Array<Listing>;
  /** Returns list of all stores */
  getStores?: Maybe<Array<Maybe<Store>>>;
  /** Returns the details about this listing */
  listing?: Maybe<Listing>;
  /** returns user query object */
  userQuery?: Maybe<UserQuery>;
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserQueryArgs = {
  id: Scalars['ID']['input'];
};

export type Store = {
  __typename?: 'Store';
  descripcion?: Maybe<Scalars['String']['output']>;
  direccion?: Maybe<Scalars['String']['output']>;
  fecha_suscripcion?: Maybe<Scalars['String']['output']>;
  fotos?: Maybe<Scalars['String']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  tienda_id: Scalars['ID']['output'];
  uid?: Maybe<Scalars['String']['output']>;
};

/** A user data */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  fecha_nacimiento?: Maybe<Scalars['String']['output']>;
  fecha_registro?: Maybe<Scalars['String']['output']>;
  nombres: Scalars['String']['output'];
  rol?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  url_imagen?: Maybe<Scalars['String']['output']>;
};

/** A response from user api */
export type UserQuery = {
  __typename?: 'userQuery';
  data?: Maybe<User>;
  sucess: Scalars['Boolean']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Amenity: ResolverTypeWrapper<Amenity>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CreateListingInput: CreateListingInput;
  CreateListingResponse: ResolverTypeWrapper<CreateListingResponse>;
  CreateStoreInput: CreateStoreInput;
  CreateUserInput: CreateUserInput;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Listing: ResolverTypeWrapper<Listing>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Store: ResolverTypeWrapper<Store>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  userQuery: ResolverTypeWrapper<UserQuery>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Amenity: Amenity;
  Boolean: Scalars['Boolean']['output'];
  CreateListingInput: CreateListingInput;
  CreateListingResponse: CreateListingResponse;
  CreateStoreInput: CreateStoreInput;
  CreateUserInput: CreateUserInput;
  CreateUserResponse: CreateUserResponse;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Listing: Listing;
  Mutation: {};
  Query: {};
  Store: Store;
  String: Scalars['String']['output'];
  User: User;
  userQuery: UserQuery;
};

export type AmenityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateListingResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateListingResponse'] = ResolversParentTypes['CreateListingResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  code?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Listing'] = ResolversParentTypes['Listing']> = {
  amenities?: Resolver<Array<ResolversTypes['Amenity']>, ParentType, ContextType>;
  closedForBookings?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  costPerNight?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  numOfBeds?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createListing?: Resolver<ResolversTypes['CreateListingResponse'], ParentType, ContextType, RequireFields<MutationCreateListingArgs, 'input'>>;
  createStore?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteStore?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  featuredListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  getStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<QueryListingArgs, 'id'>>;
  userQuery?: Resolver<Maybe<ResolversTypes['userQuery']>, ParentType, ContextType, RequireFields<QueryUserQueryArgs, 'id'>>;
};

export type StoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  descripcion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direccion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fecha_suscripcion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fotos?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tienda_id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  uid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fecha_nacimiento?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fecha_registro?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nombres?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url_imagen?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserQueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['userQuery'] = ResolversParentTypes['userQuery']> = {
  data?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  sucess?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Amenity?: AmenityResolvers<ContextType>;
  CreateListingResponse?: CreateListingResponseResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  userQuery?: UserQueryResolvers<ContextType>;
};

