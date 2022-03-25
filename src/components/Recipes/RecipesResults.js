import { useContext } from "react";
import { Row, Col, Container } from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "../Menu/MenuItem";
import classes from "./RecipeResults.module.css";
// from /recipes/complexSearch?query=salad&cuisine=greek&diet=vegetarian&maxCarbs=2000&includeIngredients=tomatoes&apiKey=08431604f5ee4f9e80c2d592bfb26980&number=2&addRecipeInformation=true
const DUMMY_RECIPES = [
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
];
export default function RecipeResults(props) {
  // console.log(props.items)
  const menuCtx = useContext(MenuContext);
  return (
    <Row className={classes.col}>
      {props.items.length == 0 && <p>No results, try again</p>}
      {props.items.length > 0 &&
        props.items.map((recipe) => (
          <Col
            key={recipe.id}
            lg={{
              offset: 0,
              size: 6,
            }}
            md={{
              offset: 1,
              size: 10,
            }}
            sm="12"
            xs="12"
            className={classes.col}
          >
            <MenuItem
              id={recipe.id}
              price={(recipe.pricePerServing / 100).toFixed(2)}
              healthScore={recipe.healthScore}
              readyInMinutes={recipe.readyInMinutes}
              vegan={recipe.vegan}
              title={recipe.title} //string
              image={recipe.image} //url
              summary={recipe.summary} //array
              onAdd={menuCtx.addItem.bind(null, {
                id: recipe.id,
                vegan: recipe.vegan,
              })}
              onRemove={menuCtx.removeItem.bind(null, {
                id: recipe.id,
                vegan: recipe.vegan,
              })}
              onClear={menuCtx.clearMenu}
            ></MenuItem>
          </Col>
        ))}
    </Row>
  );
}
