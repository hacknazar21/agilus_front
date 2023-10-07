import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/dist/query/react";
import { BaseQueryArg } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.API_URL,
  credentials: "include",
});
const baseQueryWithReAuth: BaseQueryFn = async (
  args: BaseQueryArg<any>,
  api,
  extraOptions
) => {
  return await baseQuery(args, api, extraOptions);
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({}),
});
