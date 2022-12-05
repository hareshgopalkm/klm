import { gql } from 'apollo-angular';

export const FULL_BOOKING = gql`
  query FullBookingQuery($bookingCode: String!, $familyName: String!) {
    getBooking(bookingCode: $bookingCode, familyName: $familyName) {
      bookingCode
      contactDetails {
        address
      }
      itinerary {
        connections {
          destination {
            name
            city {
              IATACode
              country {
                name
                code
              }
              name
            }
            IATACode
          }
          duration
          id
          origin {
            name
            city {
              IATACode
              country {
                name
                code
              }
              name
            }
            IATACode
          }
          segments {
            type
            marketingFlight {
              numberOfStops
              number
              carrier {
                name
                code
              }
              operatingFlight {
                checkInEnd
                checkInStart
                carrier {
                  name
                  code
                }
                cabin {
                  name
                  code
                }
                arrivalTerminal {
                  name
                }
                duration
                equipment {
                  name
                  code
                }
                flown
                localCheckInEnd
                localCheckInStart
                localScheduledArrival
                localScheduledDeparture
                number
                scheduledArrival
                scheduledDeparture
              }
              sellingClass {
                code
              }
              status {
                name
                code
              }
            }
            informational
            id
            departFrom {
              IATACode
              city {
                name
                country {
                  code
                  name
                }
                IATACode
              }
              name
            }
            arriveOn {
              IATACode
              city {
                name
                country {
                  code
                  name
                }
                IATACode
              }
              name
            }
          }
        }
        type
      }
      passengers {
        title {
          code
          name
        }
        lastName
        id
        firstName
      }
    }
  }
`;
