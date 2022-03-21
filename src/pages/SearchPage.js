import { Fragment } from "react";
import RecipeForm from "../components/Recipes/RecipesForm";
import RecipeResults from "../components/Recipes/RecipesResults";

const SearchPage = () => {
  return (
    <Fragment>
      <RecipeForm />
      {/* <RecipeResults /> */}
    </Fragment>
  );
};

export default SearchPage;
