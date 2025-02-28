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

export type CreateHistorialInput = {
  activo?: InputMaybe<Scalars['Boolean']['input']>;
  cantidad_consumida?: InputMaybe<Scalars['Int']['input']>;
  fecha_consumo?: InputMaybe<Scalars['String']['input']>;
  id_producto?: InputMaybe<Scalars['String']['input']>;
  nutrientes_ingeridos?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
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

export type CreateProductInput = {
  created_at?: InputMaybe<Scalars['String']['input']>;
  descripcion?: InputMaybe<Scalars['String']['input']>;
  id_producto?: InputMaybe<Scalars['ID']['input']>;
  nombre?: InputMaybe<Scalars['String']['input']>;
  referencia?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['String']['input']>;
  url_imagen?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSearchInput = {
  activo?: InputMaybe<Scalars['Boolean']['input']>;
  fecha_busqueda?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  id_producto?: InputMaybe<Scalars['String']['input']>;
  id_tienda?: InputMaybe<Scalars['String']['input']>;
  redireccion_tienda?: InputMaybe<Scalars['Boolean']['input']>;
  uid: Scalars['String']['input'];
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

export type Historial = {
  __typename?: 'Historial';
  activo?: Maybe<Scalars['Boolean']['output']>;
  cantidad_consumida?: Maybe<Scalars['Int']['output']>;
  fecha_consumo?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  id_producto?: Maybe<Scalars['String']['output']>;
  nutrientes_ingeridos?: Maybe<Scalars['String']['output']>;
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
  createHistorial: CreateUserResponse;
  /** Creates a new listing */
  createListing: CreateListingResponse;
  createProduct: CreateUserResponse;
  createSearch: CreateUserResponse;
  createStore: CreateUserResponse;
  /** creates a user */
  createUser: CreateUserResponse;
  deleteHistorial: CreateUserResponse;
  deleteSearch: CreateUserResponse;
  deleteStore: CreateUserResponse;
  updateUser: CreateUserResponse;
};


export type MutationCreateHistorialArgs = {
  input: CreateHistorialInput;
};


export type MutationCreateListingArgs = {
  input: CreateListingInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateSearchArgs = {
  input: CreateSearchInput;
};


export type MutationCreateStoreArgs = {
  input: CreateStoreInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationDeleteHistorialArgs = {
  data?: InputMaybe<UserRecord>;
};


export type MutationDeleteSearchArgs = {
  data?: InputMaybe<UserRecord>;
};


export type MutationDeleteStoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateUserArgs = {
  input: CreateUserInput;
};

export type Off = {
  __typename?: 'Off';
  infoProducto?: Maybe<Array<Maybe<InfoProducto>>>;
  productoOff?: Maybe<Array<Maybe<ProductoOff>>>;
};

export type Product = {
  __typename?: 'Product';
  created_at?: Maybe<Scalars['String']['output']>;
  descripcion?: Maybe<Scalars['String']['output']>;
  id_producto?: Maybe<Scalars['ID']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  referencia?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['String']['output']>;
  url_imagen?: Maybe<Scalars['String']['output']>;
};

export type ProductoOff = {
  __typename?: 'ProductoOff';
  categorias?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  foto?: Maybe<Scalars['String']['output']>;
  nombre?: Maybe<Scalars['String']['output']>;
  nutriscore?: Maybe<Scalars['String']['output']>;
  referencia?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** A curated array of listings to feature on the homepage */
  featuredListings: Array<Listing>;
  getGetProductAndStore?: Maybe<Array<Maybe<Store>>>;
  getHistorials?: Maybe<Array<Maybe<Historial>>>;
  getHistorialsByDay?: Maybe<Array<Maybe<Historial>>>;
  getInfoOff?: Maybe<Array<Maybe<Product>>>;
  getProduct?: Maybe<Product>;
  getProductByStore?: Maybe<Array<Maybe<Product>>>;
  getProductByUser?: Maybe<Array<Maybe<Product>>>;
  getProducts: Array<Maybe<Product>>;
  getSearch?: Maybe<Array<Maybe<Search>>>;
  getStoreByUser?: Maybe<Array<Maybe<Store>>>;
  /** Returns list of all stores */
  getStores?: Maybe<Array<Maybe<Store>>>;
  /** Returns the details about this listing */
  listing?: Maybe<Listing>;
  /** returns user query object */
  userQuery?: Maybe<UserQuery>;
};


export type QueryGetGetProductAndStoreArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetHistorialsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetHistorialsByDayArgs = {
  days?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
};


export type QueryGetInfoOffArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProductByStoreArgs = {
  storeId?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetProductByUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetSearchArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetStoreByUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserQueryArgs = {
  id: Scalars['ID']['input'];
};

export type Search = {
  __typename?: 'Search';
  activo?: Maybe<Scalars['Boolean']['output']>;
  fecha_busqueda?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  id_producto?: Maybe<Scalars['String']['output']>;
  id_tienda?: Maybe<Scalars['String']['output']>;
  redireccion_tienda?: Maybe<Scalars['Boolean']['output']>;
};

export type Store = {
  __typename?: 'Store';
  descripcion?: Maybe<Scalars['String']['output']>;
  direccion?: Maybe<Scalars['String']['output']>;
  fecha_suscripcion?: Maybe<Scalars['String']['output']>;
  fotos?: Maybe<Scalars['String']['output']>;
  id_tienda: Scalars['ID']['output'];
  nombre?: Maybe<Scalars['String']['output']>;
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

export type UserDays = {
  __typename?: 'UserDays';
  days: Scalars['Int']['output'];
  uid: Scalars['String']['output'];
};

export type UserRecord = {
  __typename?: 'UserRecord';
  recordId: Scalars['String']['output'];
  uid: Scalars['String']['output'];
};

export type InfoProducto = {
  __typename?: 'infoProducto';
  azucar?: Maybe<Scalars['Float']['output']>;
  cantidad?: Maybe<Scalars['Int']['output']>;
  carbohidratos?: Maybe<Scalars['Float']['output']>;
  energia?: Maybe<Scalars['Float']['output']>;
  fibra?: Maybe<Scalars['Float']['output']>;
  grasaSaturada?: Maybe<Scalars['Float']['output']>;
  grasas?: Maybe<Scalars['Float']['output']>;
  imagenFrontalUrl?: Maybe<Scalars['String']['output']>;
  nivelesAltos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  proteina?: Maybe<Scalars['Float']['output']>;
  sodio?: Maybe<Scalars['Float']['output']>;
  unidadAzucar?: Maybe<Scalars['String']['output']>;
  unidadCantidad?: Maybe<Scalars['String']['output']>;
  unidadCarbohidratos?: Maybe<Scalars['String']['output']>;
  unidadEnergia?: Maybe<Scalars['String']['output']>;
  unidadFibra?: Maybe<Scalars['String']['output']>;
  unidadGrasaSaturada?: Maybe<Scalars['String']['output']>;
  unidadGrasas?: Maybe<Scalars['String']['output']>;
  unidadProteina?: Maybe<Scalars['String']['output']>;
  unidadSodio?: Maybe<Scalars['String']['output']>;
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
  CreateHistorialInput: CreateHistorialInput;
  CreateListingInput: CreateListingInput;
  CreateListingResponse: ResolverTypeWrapper<CreateListingResponse>;
  CreateProductInput: CreateProductInput;
  CreateSearchInput: CreateSearchInput;
  CreateStoreInput: CreateStoreInput;
  CreateUserInput: CreateUserInput;
  CreateUserResponse: ResolverTypeWrapper<CreateUserResponse>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Historial: ResolverTypeWrapper<Historial>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Listing: ResolverTypeWrapper<Listing>;
  Mutation: ResolverTypeWrapper<{}>;
  Off: ResolverTypeWrapper<Off>;
  Product: ResolverTypeWrapper<Product>;
  ProductoOff: ResolverTypeWrapper<ProductoOff>;
  Query: ResolverTypeWrapper<{}>;
  Search: ResolverTypeWrapper<Search>;
  Store: ResolverTypeWrapper<Store>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserDays: ResolverTypeWrapper<UserDays>;
  UserRecord: ResolverTypeWrapper<UserRecord>;
  infoProducto: ResolverTypeWrapper<InfoProducto>;
  userQuery: ResolverTypeWrapper<UserQuery>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Amenity: Amenity;
  Boolean: Scalars['Boolean']['output'];
  CreateHistorialInput: CreateHistorialInput;
  CreateListingInput: CreateListingInput;
  CreateListingResponse: CreateListingResponse;
  CreateProductInput: CreateProductInput;
  CreateSearchInput: CreateSearchInput;
  CreateStoreInput: CreateStoreInput;
  CreateUserInput: CreateUserInput;
  CreateUserResponse: CreateUserResponse;
  Float: Scalars['Float']['output'];
  Historial: Historial;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Listing: Listing;
  Mutation: {};
  Off: Off;
  Product: Product;
  ProductoOff: ProductoOff;
  Query: {};
  Search: Search;
  Store: Store;
  String: Scalars['String']['output'];
  User: User;
  UserDays: UserDays;
  UserRecord: UserRecord;
  infoProducto: InfoProducto;
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

export type HistorialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Historial'] = ResolversParentTypes['Historial']> = {
  activo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cantidad_consumida?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  fecha_consumo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_producto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nutrientes_ingeridos?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  createHistorial?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateHistorialArgs, 'input'>>;
  createListing?: Resolver<ResolversTypes['CreateListingResponse'], ParentType, ContextType, RequireFields<MutationCreateListingArgs, 'input'>>;
  createProduct?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateProductArgs, 'input'>>;
  createSearch?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateSearchArgs, 'input'>>;
  createStore?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateStoreArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteHistorial?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, Partial<MutationDeleteHistorialArgs>>;
  deleteSearch?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, Partial<MutationDeleteSearchArgs>>;
  deleteStore?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationDeleteStoreArgs, 'id'>>;
  updateUser?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export type OffResolvers<ContextType = any, ParentType extends ResolversParentTypes['Off'] = ResolversParentTypes['Off']> = {
  infoProducto?: Resolver<Maybe<Array<Maybe<ResolversTypes['infoProducto']>>>, ParentType, ContextType>;
  productoOff?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductoOff']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  created_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descripcion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_producto?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referencia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url_imagen?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductoOffResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductoOff'] = ResolversParentTypes['ProductoOff']> = {
  categorias?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  foto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nutriscore?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referencia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  featuredListings?: Resolver<Array<ResolversTypes['Listing']>, ParentType, ContextType>;
  getGetProductAndStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType, Partial<QueryGetGetProductAndStoreArgs>>;
  getHistorials?: Resolver<Maybe<Array<Maybe<ResolversTypes['Historial']>>>, ParentType, ContextType, RequireFields<QueryGetHistorialsArgs, 'id'>>;
  getHistorialsByDay?: Resolver<Maybe<Array<Maybe<ResolversTypes['Historial']>>>, ParentType, ContextType, RequireFields<QueryGetHistorialsByDayArgs, 'id'>>;
  getInfoOff?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryGetInfoOffArgs>>;
  getProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryGetProductArgs, 'id'>>;
  getProductByStore?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryGetProductByStoreArgs>>;
  getProductByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType, Partial<QueryGetProductByUserArgs>>;
  getProducts?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType>;
  getSearch?: Resolver<Maybe<Array<Maybe<ResolversTypes['Search']>>>, ParentType, ContextType, Partial<QueryGetSearchArgs>>;
  getStoreByUser?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType, Partial<QueryGetStoreByUserArgs>>;
  getStores?: Resolver<Maybe<Array<Maybe<ResolversTypes['Store']>>>, ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['Listing']>, ParentType, ContextType, RequireFields<QueryListingArgs, 'id'>>;
  userQuery?: Resolver<Maybe<ResolversTypes['userQuery']>, ParentType, ContextType, RequireFields<QueryUserQueryArgs, 'id'>>;
};

export type SearchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Search'] = ResolversParentTypes['Search']> = {
  activo?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fecha_busqueda?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id_producto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_tienda?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  redireccion_tienda?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Store'] = ResolversParentTypes['Store']> = {
  descripcion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  direccion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fecha_suscripcion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fotos?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id_tienda?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nombre?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type UserDaysResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserDays'] = ResolversParentTypes['UserDays']> = {
  days?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserRecord'] = ResolversParentTypes['UserRecord']> = {
  recordId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uid?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InfoProductoResolvers<ContextType = any, ParentType extends ResolversParentTypes['infoProducto'] = ResolversParentTypes['infoProducto']> = {
  azucar?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  cantidad?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  carbohidratos?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  energia?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  fibra?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grasaSaturada?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  grasas?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  imagenFrontalUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nivelesAltos?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  proteina?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  sodio?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unidadAzucar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadCantidad?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadCarbohidratos?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadEnergia?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadFibra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadGrasaSaturada?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadGrasas?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadProteina?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unidadSodio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  Historial?: HistorialResolvers<ContextType>;
  Listing?: ListingResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Off?: OffResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductoOff?: ProductoOffResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Search?: SearchResolvers<ContextType>;
  Store?: StoreResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserDays?: UserDaysResolvers<ContextType>;
  UserRecord?: UserRecordResolvers<ContextType>;
  infoProducto?: InfoProductoResolvers<ContextType>;
  userQuery?: UserQueryResolvers<ContextType>;
};

