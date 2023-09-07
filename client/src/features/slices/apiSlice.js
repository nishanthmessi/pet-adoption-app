import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://top-hat-gopher.cyclic.app',
})

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User', 'Pet'],
  endpoints: (builder) => ({}),
})
