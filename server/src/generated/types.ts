import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ArrivalTerminal = {
  __typename?: 'ArrivalTerminal';
  name: Scalars['String'];
};

export type ArriveOn = {
  __typename?: 'ArriveOn';
  IATACode: Scalars['String'];
  city: City;
  name: Scalars['String'];
};

export type Booking = {
  __typename?: 'Booking';
  bookingCode: Scalars['String'];
  contactDetails: Array<ContactDetails>;
  itinerary: Itinerary;
  passengers: Array<Passenger>;
};

export type Cabin = {
  __typename?: 'Cabin';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Carrier = {
  __typename?: 'Carrier';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type City = {
  __typename?: 'City';
  IATACode: Scalars['String'];
  country: Country;
  name: Scalars['String'];
};

export type Connections = {
  __typename?: 'Connections';
  destination: Destination;
  duration: Scalars['String'];
  id: Scalars['Int'];
  origin: Origin;
  segments?: Maybe<Array<Segments>>;
};

export type ContactDetails = {
  __typename?: 'ContactDetails';
  address: Scalars['String'];
  class: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type DepartFrom = {
  __typename?: 'DepartFrom';
  IATACode: Scalars['String'];
  city: City;
  name: Scalars['String'];
};

export type Destination = {
  __typename?: 'Destination';
  IATACode: Scalars['String'];
  city: City;
  name: Scalars['String'];
};

export type Equipment = {
  __typename?: 'Equipment';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Itinerary = {
  __typename?: 'Itinerary';
  connections?: Maybe<Array<Connections>>;
  type: Scalars['String'];
};

export type MarketingFlight = {
  __typename?: 'MarketingFlight';
  carrier?: Maybe<Carrier>;
  number: Scalars['String'];
  numberOfStops: Scalars['Int'];
  operatingFlight?: Maybe<OperatingFlight>;
  sellingClass?: Maybe<SellingClass>;
  status?: Maybe<Status>;
};

export type OperatingFlight = {
  __typename?: 'OperatingFlight';
  arrivalTerminal?: Maybe<ArrivalTerminal>;
  cabin?: Maybe<Cabin>;
  carrier: Carrier;
  checkInEnd: Scalars['String'];
  checkInStart: Scalars['String'];
  duration: Scalars['String'];
  equipment?: Maybe<Equipment>;
  flown: Scalars['Boolean'];
  localCheckInEnd: Scalars['String'];
  localCheckInStart: Scalars['String'];
  localScheduledArrival: Scalars['String'];
  localScheduledDeparture: Scalars['String'];
  number: Scalars['String'];
  scheduledArrival: Scalars['String'];
  scheduledDeparture: Scalars['String'];
};

export type Origin = {
  __typename?: 'Origin';
  IATACode: Scalars['String'];
  city: City;
  name: Scalars['String'];
};

export type Passenger = {
  __typename?: 'Passenger';
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  title: Title;
};

export type Query = {
  __typename?: 'Query';
  getBooking: Booking;
};


export type QueryGetBookingArgs = {
  bookingCode: Scalars['String'];
  familyName: Scalars['String'];
};

export type Segments = {
  __typename?: 'Segments';
  arriveOn: ArriveOn;
  departFrom: DepartFrom;
  id: Scalars['Int'];
  informational?: Maybe<Scalars['Boolean']>;
  marketingFlight?: Maybe<MarketingFlight>;
  type: Scalars['String'];
};

export type SellingClass = {
  __typename?: 'SellingClass';
  code: Scalars['String'];
};

export type Status = {
  __typename?: 'Status';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type Title = {
  __typename?: 'Title';
  code: Scalars['String'];
  name: Scalars['String'];
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
  ArrivalTerminal: ResolverTypeWrapper<ArrivalTerminal>;
  ArriveOn: ResolverTypeWrapper<ArriveOn>;
  Booking: ResolverTypeWrapper<Booking>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cabin: ResolverTypeWrapper<Cabin>;
  Carrier: ResolverTypeWrapper<Carrier>;
  City: ResolverTypeWrapper<City>;
  Connections: ResolverTypeWrapper<Connections>;
  ContactDetails: ResolverTypeWrapper<ContactDetails>;
  Country: ResolverTypeWrapper<Country>;
  DepartFrom: ResolverTypeWrapper<DepartFrom>;
  Destination: ResolverTypeWrapper<Destination>;
  Equipment: ResolverTypeWrapper<Equipment>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Itinerary: ResolverTypeWrapper<Itinerary>;
  MarketingFlight: ResolverTypeWrapper<MarketingFlight>;
  OperatingFlight: ResolverTypeWrapper<OperatingFlight>;
  Origin: ResolverTypeWrapper<Origin>;
  Passenger: ResolverTypeWrapper<Passenger>;
  Query: ResolverTypeWrapper<{}>;
  Segments: ResolverTypeWrapper<Segments>;
  SellingClass: ResolverTypeWrapper<SellingClass>;
  Status: ResolverTypeWrapper<Status>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Title: ResolverTypeWrapper<Title>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  ArrivalTerminal: ArrivalTerminal;
  ArriveOn: ArriveOn;
  Booking: Booking;
  Boolean: Scalars['Boolean'];
  Cabin: Cabin;
  Carrier: Carrier;
  City: City;
  Connections: Connections;
  ContactDetails: ContactDetails;
  Country: Country;
  DepartFrom: DepartFrom;
  Destination: Destination;
  Equipment: Equipment;
  Int: Scalars['Int'];
  Itinerary: Itinerary;
  MarketingFlight: MarketingFlight;
  OperatingFlight: OperatingFlight;
  Origin: Origin;
  Passenger: Passenger;
  Query: {};
  Segments: Segments;
  SellingClass: SellingClass;
  Status: Status;
  String: Scalars['String'];
  Title: Title;
};

export type ArrivalTerminalResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArrivalTerminal'] = ResolversParentTypes['ArrivalTerminal']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArriveOnResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArriveOn'] = ResolversParentTypes['ArriveOn']> = {
  IATACode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']> = {
  bookingCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  contactDetails?: Resolver<Array<ResolversTypes['ContactDetails']>, ParentType, ContextType>;
  itinerary?: Resolver<ResolversTypes['Itinerary'], ParentType, ContextType>;
  passengers?: Resolver<Array<ResolversTypes['Passenger']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CabinResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cabin'] = ResolversParentTypes['Cabin']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CarrierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Carrier'] = ResolversParentTypes['Carrier']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CityResolvers<ContextType = any, ParentType extends ResolversParentTypes['City'] = ResolversParentTypes['City']> = {
  IATACode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['Country'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Connections'] = ResolversParentTypes['Connections']> = {
  destination?: Resolver<ResolversTypes['Destination'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Origin'], ParentType, ContextType>;
  segments?: Resolver<Maybe<Array<ResolversTypes['Segments']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContactDetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ContactDetails'] = ResolversParentTypes['ContactDetails']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  class?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartFromResolvers<ContextType = any, ParentType extends ResolversParentTypes['DepartFrom'] = ResolversParentTypes['DepartFrom']> = {
  IATACode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DestinationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Destination'] = ResolversParentTypes['Destination']> = {
  IATACode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Equipment'] = ResolversParentTypes['Equipment']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItineraryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Itinerary'] = ResolversParentTypes['Itinerary']> = {
  connections?: Resolver<Maybe<Array<ResolversTypes['Connections']>>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketingFlightResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketingFlight'] = ResolversParentTypes['MarketingFlight']> = {
  carrier?: Resolver<Maybe<ResolversTypes['Carrier']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numberOfStops?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  operatingFlight?: Resolver<Maybe<ResolversTypes['OperatingFlight']>, ParentType, ContextType>;
  sellingClass?: Resolver<Maybe<ResolversTypes['SellingClass']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Status']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OperatingFlightResolvers<ContextType = any, ParentType extends ResolversParentTypes['OperatingFlight'] = ResolversParentTypes['OperatingFlight']> = {
  arrivalTerminal?: Resolver<Maybe<ResolversTypes['ArrivalTerminal']>, ParentType, ContextType>;
  cabin?: Resolver<Maybe<ResolversTypes['Cabin']>, ParentType, ContextType>;
  carrier?: Resolver<ResolversTypes['Carrier'], ParentType, ContextType>;
  checkInEnd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkInStart?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  equipment?: Resolver<Maybe<ResolversTypes['Equipment']>, ParentType, ContextType>;
  flown?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  localCheckInEnd?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localCheckInStart?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localScheduledArrival?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  localScheduledDeparture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  number?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduledArrival?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  scheduledDeparture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OriginResolvers<ContextType = any, ParentType extends ResolversParentTypes['Origin'] = ResolversParentTypes['Origin']> = {
  IATACode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['City'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PassengerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Passenger'] = ResolversParentTypes['Passenger']> = {
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['Title'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getBooking?: Resolver<ResolversTypes['Booking'], ParentType, ContextType, RequireFields<QueryGetBookingArgs, 'bookingCode' | 'familyName'>>;
};

export type SegmentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Segments'] = ResolversParentTypes['Segments']> = {
  arriveOn?: Resolver<ResolversTypes['ArriveOn'], ParentType, ContextType>;
  departFrom?: Resolver<ResolversTypes['DepartFrom'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  informational?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  marketingFlight?: Resolver<Maybe<ResolversTypes['MarketingFlight']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellingClassResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellingClass'] = ResolversParentTypes['SellingClass']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TitleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Title'] = ResolversParentTypes['Title']> = {
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ArrivalTerminal?: ArrivalTerminalResolvers<ContextType>;
  ArriveOn?: ArriveOnResolvers<ContextType>;
  Booking?: BookingResolvers<ContextType>;
  Cabin?: CabinResolvers<ContextType>;
  Carrier?: CarrierResolvers<ContextType>;
  City?: CityResolvers<ContextType>;
  Connections?: ConnectionsResolvers<ContextType>;
  ContactDetails?: ContactDetailsResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  DepartFrom?: DepartFromResolvers<ContextType>;
  Destination?: DestinationResolvers<ContextType>;
  Equipment?: EquipmentResolvers<ContextType>;
  Itinerary?: ItineraryResolvers<ContextType>;
  MarketingFlight?: MarketingFlightResolvers<ContextType>;
  OperatingFlight?: OperatingFlightResolvers<ContextType>;
  Origin?: OriginResolvers<ContextType>;
  Passenger?: PassengerResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Segments?: SegmentsResolvers<ContextType>;
  SellingClass?: SellingClassResolvers<ContextType>;
  Status?: StatusResolvers<ContextType>;
  Title?: TitleResolvers<ContextType>;
};

