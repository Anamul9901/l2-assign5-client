import { baseApi } from "../../api/baseApi";
const bookingsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooking: builder.query({
      query: () => {
        return {
          url: `/bookings`,
          method: "GET",
        };
      },
      providesTags: ["bookings"],
    }),

    getSingleBooking: builder.query({
      query: () => {
        return {
          url: `/bookings/user`,
          method: "GET",
        };
      },
      providesTags: ["bookings"],
    }),

    checkAvailablBooking: builder.query({
      query: () => {
        return {
          url: `/check-availability`,
          method: "GET",
        };
      },
    }),

    createBooking: builder.mutation({
      query: (data) => {
        console.log("userinfo", data);
        return {
          url: "/bookings",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["bookings"],
    }),

    cancelBooking: builder.mutation({
      query: (data) => {
        return {
          url: `/bookings/${data}`,
          method: "DELETE",
          body: data,
        };
      },
      invalidatesTags: ["bookings"],
    }),
  }),
});

export const {
  useGetAllBookingQuery,
  useGetSingleBookingQuery,
  useCheckAvailablBookingQuery,
  useCreateBookingMutation,
  useCancelBookingMutation,
} = bookingsApi;
