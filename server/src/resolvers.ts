import { GraphQLError, GraphQLResolveInfo } from 'graphql';
import { Booking, QueryGetBookingArgs, Resolvers } from './generated/types';
import fetch from 'node-fetch';

export const resolvers: Resolvers = {
  Query: {
    getBooking(
        _,
        args: Partial<QueryGetBookingArgs>,
        context: any,
        info: GraphQLResolveInfo) {
      return fetch('http://localhost:4001/booking-data')
          .then(async (data) => {
            const booking: Booking = await data.json();
            const passenger = booking.passengers
                .find(passenger => passenger.lastName === args.familyName);
            if(booking.bookingCode !== args.bookingCode || !passenger) {
              throw new GraphQLError('Booking not found', {
                extensions: {
                  code: 'BOOKING_NOT_FOUND',
                }
              });
            }
            return booking;
          })
          .catch(err => {
            if(err instanceof GraphQLError) {
              throw err;
            }
            throw new GraphQLError('Booking not available', {
              extensions: {
                code: 'BOOKING_DATASOURCE_UNAVAILABLE'
              }
            })
          });
    }
  }
}
