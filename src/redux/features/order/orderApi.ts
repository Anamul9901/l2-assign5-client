import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => {
        console.log('data', data);
        return {
          method: "POST",
          url: `/order/create`,
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
