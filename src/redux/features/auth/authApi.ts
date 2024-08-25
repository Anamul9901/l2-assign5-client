import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (data) => {
        console.log("email----", data);
        return {
          url: `/auth/user/${data.email}`,
          method: "GET",
        };
      },
    }),

    login: builder.mutation({
      query: (userInfo) => {
        console.log("userinfo", userInfo);
        return {
          url: "/auth/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),

    register: builder.mutation({
      query: (userInfo) => {
        console.log("userinfo", userInfo);
        return {
          url: "/auth/signup",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  authApi;
