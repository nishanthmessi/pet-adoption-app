import { apiSlice } from '../apiSlice'

const PETS_URL = '/api/pets'

export const petsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerPet: builder.mutation({
      query: (data) => ({
        url: `${PETS_URL}/register-pet`,
        method: 'POST',
        body: data,
      }),
    }),
    getAllPets: builder.query({
      query: () => ({ url: `${PETS_URL}/all-pets` }),
    }),
    getPetProfile: builder.query({
      query: (id) => ({ url: `${PETS_URL}/pet-profile/${id}` }),
    }),
  }),
})

export const {
  useRegisterPetMutation,
  useGetAllPetsQuery,
  useGetPetProfileQuery,
} = petsApiSlice
