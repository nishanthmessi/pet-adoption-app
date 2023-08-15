import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/pets' })

export const petsApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    registerPet: builder.mutation({
      query: (data) => ({
        url: `/register-pet`,
        method: 'POST',
        body: data,
      }),
    }),
    getAllPets: builder.query({
      query: () => ({ url: `/all-pets` }),
    }),
  }),
})

export const { useGetAllPetsQuery } = petsApi
