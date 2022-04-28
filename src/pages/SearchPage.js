import { Fragment, useContext } from "react";
import RecipeForm from "../components/Recipes/RecipesForm";
import RecipeResults from "../components/Recipes/RecipesResults";
import { MenuContext } from "../store/menu-context";
import { useAxios } from "../hooks/use-axios";
import { DUMMY_RECIPES } from "../utils/constants";

const SearchPage = () => {
  const menuCtx = useContext(MenuContext);
  const { apiKey } = menuCtx;
  const { response = DUMMY_RECIPES, fetchData } = useAxios();

  const onSubmitHandler = (values) => {
    fetchData({
      method: "get",
      url: `/recipes/complexSearch`,
      headers: { accept: "*/*" },
      params: { ...values, apiKey },
    });
  };

  console.log("response on SearchPage:", response.results);
  return (
    <Fragment>
      <RecipeForm onSubmit={onSubmitHandler} />
      <RecipeResults items={response.results} />
    </Fragment>
  );
};

export default SearchPage;
