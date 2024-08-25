/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);

  //   if (result?.error?.status === 404) {
  //     toast.error(result?.error?.data?.message);
  //   }

  //   if (result?.error?.status === 403) {
  //     toast.error(result?.error?.data?.message);
  //   }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ["semester", "courses"],
  endpoints: () => ({}),
});
