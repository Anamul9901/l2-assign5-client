import { baseApi } from "../../api/baseApi";
const facilityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacility: builder.query({
      query: () => {
        return {
          url: `/facility`,
          method: "GET",
        };
      },
      providesTags: ["facility"],
    }),

    createFacility: builder.mutation({
      query: (data) => {
        console.log("userinfo", data);
        return {
          url: "/facility",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["facility"],
    }),

    updateFacility: builder.mutation({
      query: (args) => {
        return {
          url: `/facility/${args.id}`,
          method: "UPDATE",
          body: args.data,
        };
      },
      invalidatesTags: ["facility"],
    }),

    deleteFacility: builder.mutation({
      query: (id) => {
        return {
          url: `/facility/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useGetAllFacilityQuery,
  useCreateFacilityMutation,
  useUpdateFacilityMutation,
  useDeleteFacilityMutation,
} = facilityApi;
