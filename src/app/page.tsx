import "../scss/style.scss";
import Catalogue from "../../components/Catalogue";
import Analyses from "../../components/Analyses";
import LayoutMain from "../../components/layouts/layout.main";
import ContextCheckout from "../../components/context/context.checkout";

type queryParams = {
  category?: string;
  search?: string;
};
async function getData(params: queryParams) {
  const isAllCategories =
    !params.category || params.category === "initial-category";
  const isSearch = !!params.search;
  const categories_with_analyses_res = await fetch(
    process.env.API_URL +
      (isAllCategories
        ? isSearch
          ? `/api/catalogue/analyses/search/?search=${params.search}`
          : "/api/catalogue/categories/with_analyses/"
        : `/api/catalogue/categories/${params.category}/`)
  );

  const categories_res = await fetch(
    process.env.API_URL + "/api/catalogue/categories/"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!categories_with_analyses_res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  } else if (!categories_res.ok) {
    throw new Error("Failed to fetch data");
  }

  return {
    categories_with_analyses_res: await categories_with_analyses_res.json(),
    categories: await categories_res.json(),
  };
}

export default async function Home(props) {
  const { categories_with_analyses_res, categories } = await getData(
    props.searchParams
  );
  return (
    <ContextCheckout>
      <LayoutMain isNoSearch={false}>
        <Catalogue
          currentActive={props.searchParams.category ?? "initial-category"}
          currentCategory={categories_with_analyses_res[0]}
          categories={categories}
        />
        <Analyses
          searchValue={props.searchParams.search}
          categories_with_analyses_res={categories_with_analyses_res}
        />
      </LayoutMain>
    </ContextCheckout>
  );
}
