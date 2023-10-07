import Catalogue from "../../../components/Catalogue";
import { GetServerSideProps } from "next";
import {
  IAnalysesDetail,
  ICategories,
} from "../../../interfaces/interface.catalogue";
import AnalysesDetail from "../../../components/analyses/detail/analyses.detail";

interface AnalysesDetailPageProps {
  categories: ICategories;
  analysesDetail: IAnalysesDetail;
}

export default function AnalysesDetailPage(props: AnalysesDetailPageProps) {
  return (
    <>
      <Catalogue
        currentActive={"initial-category"}
        categories={props.categories}
      />
      <AnalysesDetail analysesDetail={props.analysesDetail} />
    </>
  );
}

export const getServerSideProps = async (context) => {
  const analysesDetail_res = await fetch(
    `${process.env.API_URL}/api/catalogue/analyses/${context.query.id}/`
  );

  const categories_res = await fetch(
    process.env.API_URL + "/api/catalogue/categories/"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!analysesDetail_res.ok) {
    return {
      notFound: true,
      props: {
        categories: await categories_res.json(),
      },
    };
  } else if (!categories_res.ok) {
    return {
      props: {
        categories: [],
      },
    };
  }

  return {
    props: {
      analysesDetail: await analysesDetail_res.json(),
      categories: await categories_res.json(),
    },
  };
};
