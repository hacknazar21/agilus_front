import { useGetCatalogueAnalysesMutation } from "@/../store/slices/api/api.catalogue";
import { useEffect } from "react";

export const useCatalogue = async () => {
  const [getCatalogueAnalyses] = useGetCatalogueAnalysesMutation();
  const res = await getCatalogueAnalyses({});

  return res.data;
};
