import { Fragment, useState } from "react";
import RecipeForm from "../components/Recipes/RecipesForm";
import RecipeResults from "../components/Recipes/RecipesResults";

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const onSubmitHandler = (data) => {
    console.log(data.results);
    setItems(data.results);
  };
  // console.log('items on SearchPage:',items);
  return (
    <Fragment>
      <RecipeForm onSubmit={onSubmitHandler} />
      <RecipeResults items={items} />
    </Fragment>
  );
};

export default SearchPage;
