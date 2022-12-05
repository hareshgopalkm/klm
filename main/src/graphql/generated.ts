export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
