import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      },
    }),

    getAllOrders: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/order`,
        };
      },
    }),

    getCustomerReview: builder.query({
      query: () => {
        return {
          method: "GET",
          url: `/review`,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation, useGetAllOrdersQuery, useGetCustomerReviewQuery } = orderApi;
