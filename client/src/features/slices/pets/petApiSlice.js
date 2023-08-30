import { apiSlice } from '../apiSlice'

const PETS_URL = '/api/pets'

export const petsApiSlice = apiSlice.injectEndpoints({
  tagTypes: ['Pet'],
  endpoints: (builder) => ({
    registerPet: builder.mutation({
      query: (data) => ({
        url: `${PETS_URL}/register-pet`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Pet'],
    }),
    getAllPets: builder.query({
      query: () => ({ url: `${PETS_URL}/all-pets` }),
      transformResponse: (res) => res.reverse(),
      providesTags: ['Pet'],
    }),
    getPetProfile: builder.query({
      query: (id) => ({ url: `${PETS_URL}/pet-profile/${id}` }),
    }),
    filterProfiles: builder.query({
      query: (searchquery) => ({
        url: `${PETS_URL}/district/search?q=${searchquery}`,
      }),
    }),
  }),
})

export const {
  useRegisterPetMutation,
  useGetAllPetsQuery,
  useGetPetProfileQuery,
  useFilterProfilesQuery,
} = petsApiSlice
