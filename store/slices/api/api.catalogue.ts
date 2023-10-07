import { apiSlice } from "./api.slice";
import {
  IAnalyses,
  IAnalysesDetail,
  ICategories,
  ICategoriesWithAnalyses,
} from "../../../interfaces/interface.catalogue";

export const addressApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogueAnalyses: builder.mutation({
      query: (params: { category?: string }) => ({
        url: "/api/catalogue/analyses/",
        params,
        method: "GET",
      }),
      transformResponse: (response: IAnalyses) => {
        return response;
      },
    }),
    getCatalogueAnalysesDetail: builder.mutation({
      query: (params: { analyses_id: string }) => ({
        url: `/api/catalogue/analyses/${params.analyses_id}/`,
        method: "GET",
      }),
      transformResponse: (response: IAnalysesDetail) => {
        return response;
      },
    }),
    getCatalogueAnalysesCategories: builder.mutation({
      query: () => ({
        url: `/api/catalogue/categories/`,
        method: "GET",
      }),
      transformResponse: (response: ICategories) => {
        return response;
      },
    }),
    getCatalogueAnalysesCategoriesWithAnalyses: builder.mutation({
      query: () => ({
        url: `/api/catalogue/categories/with_analyses/`,
        method: "GET",
      }),
      transformResponse: (response: ICategoriesWithAnalyses) => {
        return response;
      },
    }),
  }),
});

export const {
  useGetCatalogueAnalysesMutation,
  useGetCatalogueAnalysesDetailMutation,
  useGetCatalogueAnalysesCategoriesMutation,
  useGetCatalogueAnalysesCategoriesWithAnalysesMutation,
} = addressApiSlice;
