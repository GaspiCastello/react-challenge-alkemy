import { Fragment, useContext, useEffect, useState } from "react";
import {
  Row,
  Col,
  Spinner,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import classes from "./MenuList.module.css";
import MenuItem from "../Menu/MenuItem";
import { useAxios } from "../../hooks/use-axios";
import { Link } from "react-router-dom";

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

export default function MenuList(props) {
  const [isDetailsOn, setIsDetailOn] = useState();
  const menuCtx = useContext(MenuContext);
  const { apiKey, items } = menuCtx;
  const { response = [], fetchData } = useAxios();
  const menuReducer = () => {
    if (response.length > 0) {
      const reducedParams = response.reduce((previousValue, currentValue) => ({
        pricePerServing:
          previousValue.pricePerServing + currentValue.pricePerServing,
        healthScore: previousValue.healthScore + currentValue.healthScore,
        readyInMinutes:
          previousValue.readyInMinutes + currentValue.readyInMinutes,
      }));

      return {
        acumulatedPrice: (
          reducedParams.pricePerServing /
          response.length /
          100
        ).toFixed(2),
        healthScoreAverage:( reducedParams.healthScore / response.length).toFixed(0),
        preparationTimeAverage: (reducedParams.readyInMinutes / response.length).toFixed(0),
      };
    }
  };
  const menuData = menuReducer();
  
  useEffect(() => {
    let isSubscribed = true;
    if (items.length > 0) {
      fetchData({
        method: "get",
        url: `/recipes/informationBulk`,
        headers: { accept: "*/*" },
        params: { ids: items.join(), apiKey },
        // /recipes/informationBulk?ids=715538,716429
      });
    }
    return () => (isSubscribed = false);
  }, [fetchData, items]);

  const onDetailsHandler = () => {
    setIsDetailOn((prev) => !prev);
  };
  return (
    <Fragment>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Menu of the day</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Metrics:
          </CardSubtitle>
          {response.length > 0 && (
            <CardText>
              {`Acumulated price: $${menuData.acumulatedPrice}, Average Healthy score: ${menuData.healthScoreAverage}% and Average time of preparation: ${menuData.preparationTimeAverage}mins`}
            </CardText>
          )}
          <Row>
            {items.length > 0 && (
              <Col>
                <Button onClick={onDetailsHandler}>
                  {isDetailsOn ? "Close recipes details" : "View Details"}
                </Button>
              </Col>
            )}
            <Col>
              <Link to="/add-recipe">
                <Button>Search for new recipes</Button>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
      {isDetailsOn && items.length > 0 && (
        <Row className="">
          {!response && <Spinner />}
          {response.length > 0 &&
            response.map((recipe) => (
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
      )}
    </Fragment>
  );
}
