import { Fragment, useContext } from "react";
import RecipeForm from "../components/Recipes/RecipesForm";
import RecipeResults from "../components/Recipes/RecipesResults";
import { MenuContext } from "../store/menu-context";
import { useAxios } from "../hooks/use-axios";
const DUMMY_RECIPES = {
  results: [
    {
      vegan: false,
      healthScore: 55,
      pricePerServing: 76.86,
      id: 716408,
      title: "Greek Side Salad",
      readyInMinutes: 15,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/716408-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
    {
      vegan: false,
      healthScore: 55,
      pricePerServing: 76.86,
      id: 648320,
      title: "Greek Side Salad",
      readyInMinutes: 15,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/716408-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
    {
      vegan: false,
      healthScore: 21.0,
      pricePerServing: 189.86,
      id: 729366,
      title: "Side Salad",
      readyInMinutes: 15,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/729366-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
    {
      vegan: true,
      healthScore: 23.0,
      pricePerServing: 144.86,
      id: 716426,
      title: "Ytwet Side Salad",
      readyInMinutes: 35,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
    {
      vegan: true,
      healthScore: 43.0,
      pricePerServing: 174.86,
      id: 715594,
      title: "Nfdh Side Salad",
      readyInMinutes: 35,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/715594-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
    {
      vegan: true,
      healthScore: 55.0,
      pricePerServing: 34.86,
      id: 644387,
      title: "Thsaerh Side Salad",
      readyInMinutes: 35,
      sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
      image: "https://spoonacular.com/recipeImages/644387-312x231.jpg",
      imageType: "jpg",
      summary:
        'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    },
  ],
};
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

  console.log('response on SearchPage:',response.results);
  return (
    <Fragment>
      <RecipeForm onSubmit={onSubmitHandler} />
      <RecipeResults items={response.results} />
    </Fragment>
  );
};

export default SearchPage;
