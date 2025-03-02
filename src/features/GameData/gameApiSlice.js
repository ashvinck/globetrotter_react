import { api } from '../../app/api/api';

export const gameApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllDestinations: builder.query({
      query: () => '/destinations/get/all',
      providedTags: ['AllDestinations'],
      invalidatesTags: ['AllDestinations'],
    }),
    getRandomDestinations: builder.query({
      query: () => '/destinations/get/random',
      providedTags: ['RandomDestination'],
      invalidatesTags: ['RandomDestination'],
    }),
    AddDestinations: builder.mutation({
      query: (destinationData) => ({
        url: '/destinations/add',
        method: 'POST',
        body: destinationData,
      }),
      invalidatesTags: ['gameData'],
    }),
    CheckDestinationIsCorrect: builder.mutation({
      query: (checkDestinationData) => ({
        url: '/destinations/check-destination',
        method: 'POST',
        body: checkDestinationData,
      }),
      invalidatesTags: ['checkQuestion'],
    }),
  }),
});

export const {
  useGetAllDestinationsQuery,
  useGetRandomDestinationsQuery,
  useAddDestinationsMutation,
  useCheckDestinationIsCorrectMutation,
} = gameApiSlice;
