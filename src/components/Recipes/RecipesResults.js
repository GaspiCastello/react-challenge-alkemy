import { useContext } from "react";
import { Row, Col, Container } from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "../Menu/MenuItem";
import classes from './RecipeResults.module.css'
// from /recipes/complexSearch?query=salad&cuisine=greek&diet=vegetarian&maxCarbs=2000&includeIngredients=tomatoes&apiKey=08431604f5ee4f9e80c2d592bfb26980&number=2&addRecipeInformation=true
const DUMMY_RECIPES = [
  {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 3,
    spoonacularScore: 73.0,
    healthScore: 21.0,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 189.86,
    id: 567567,
    title: "Greek Side Salad",
    readyInMinutes: 15,
    servings: 4,
    sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
    image: "https://spoonacular.com/recipeImages/645348-312x231.jpg",
    imageType: "jpg",
    summary:
      'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    cuisines: ["Mediterranean", "European", "Greek"],
    dishTypes: ["salad"],
    diets: ["gluten free", "lacto ovo vegetarian", "primal"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Slice the vegetables into bite-size wedges",
            ingredients: [
              {
                id: 11583,
                name: "vegetable",
                localizedName: "vegetable",
                image: "mixed-vegetables.png",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Toss in a bowl with olive oil",
            ingredients: [
              {
                id: 4053,
                name: "olive oil",
                localizedName: "olive oil",
                image: "olive-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Place feta on top of the salad or break up into crumbles",
            ingredients: [
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularSourceUrl: "https://spoonacular.com/greek-side-salad-645348",
    nutrition: {
      nutrients: [
        {
          name: "Carbohydrates",
          amount: 14.5505,
          unit: "g",
        },
      ],
    },
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 8,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 3,
    spoonacularScore: 73.0,
    healthScore: 21.0,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 189.86,
    id: 645348,
    title: "Greek Side Salad",
    readyInMinutes: 15,
    servings: 4,
    sourceUrl: "http://www.foodista.com/recipe/QZ2D5V6N/greek-salad",
    image: "https://spoonacular.com/recipeImages/645348-312x231.jpg",
    imageType: "jpg",
    summary:
      'Greek Side Salad might be just the side dish you are searching for. Watching your figure? This gluten free, primal, and vegetarian recipe has <b>264 calories</b>, <b>6g of protein</b>, and <b>22g of fat</b> per serving. For <b>$1.69 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. A mixture of tomatoes, kalamatan olives, greek feta, and a handful of other ingredients are all it takes to make this recipe so flavorful. 3 people were impressed by this recipe. From preparation to the plate, this recipe takes roughly <b>15 minutes</b>. This recipe is typical of Mediterranean cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 67%</b>. This score is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/fashoulakia-greek-green-bean-side-dish-666613">Fashoulakia (Greek Green Bean Side Dish)</a>, <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>, and <a href="https://spoonacular.com/recipes/side-salad-18815">Side Salad</a>.',
    cuisines: ["Mediterranean", "European", "Greek"],
    dishTypes: ["salad"],
    diets: ["gluten free", "lacto ovo vegetarian", "primal"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Slice the vegetables into bite-size wedges",
            ingredients: [
              {
                id: 11583,
                name: "vegetable",
                localizedName: "vegetable",
                image: "mixed-vegetables.png",
              },
            ],
            equipment: [],
          },
          {
            number: 2,
            step: "Toss in a bowl with olive oil",
            ingredients: [
              {
                id: 4053,
                name: "olive oil",
                localizedName: "olive oil",
                image: "olive-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Place feta on top of the salad or break up into crumbles",
            ingredients: [
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularSourceUrl: "https://spoonacular.com/greek-side-salad-645348",
    nutrition: {
      nutrients: [
        {
          name: "Carbohydrates",
          amount: 14.5505,
          unit: "g",
        },
      ],
    },
  },
  {
    vegetarian: true,
    vegan: false,
    glutenFree: true,
    dairyFree: false,
    veryHealthy: false,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    weightWatcherSmartPoints: 4,
    gaps: "no",
    lowFodmap: false,
    aggregateLikes: 1,
    spoonacularScore: 78.0,
    healthScore: 37.0,
    creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
    license: "CC BY 3.0",
    sourceName: "Foodista",
    pricePerServing: 123.12,
    id: 649354,
    title: "Layered Greek Salad",
    readyInMinutes: 45,
    servings: 10,
    sourceUrl: "http://www.foodista.com/recipe/Q7XBSGX5/layered-greek-salad",
    image: "https://spoonacular.com/recipeImages/649354-312x231.jpg",
    imageType: "jpg",
    summary:
      'Layered Greek Salad might be just the <b>Mediterranean</b> recipe you are searching for. This recipe makes 10 servings with <b>136 calories</b>, <b>9g of protein</b>, and <b>6g of fat</b> each. For <b>$1.24 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. Only a few people really liked this side dish. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is a good option if you\'re following a <b>gluten free and vegetarian</b> diet. Head to the store and pick up tomatoes, salt, kalamata, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 79%</b>. This score is good. Try <a href="https://spoonacular.com/recipes/layered-greek-salad-182470">Layered Greek Salad</a>, <a href="https://spoonacular.com/recipes/greek-salad-layered-dip-289889">Greek Salad Layered Dip</a>, and <a href="https://spoonacular.com/recipes/layered-greek-salad-for-a-crowd-267030">Layered Greek Salad for a Crowd</a> for similar recipes.',
    cuisines: ["Mediterranean", "European", "Greek"],
    dishTypes: ["salad"],
    diets: ["gluten free", "lacto ovo vegetarian"],
    occasions: [],
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Place yogurt in cheesecloth-lined sieve set over bowl. Cover and refrigerate for 4 hours or until reduced to about 2-1/2 cups.",
            ingredients: [
              {
                id: 1116,
                name: "yogurt",
                localizedName: "yogurt",
                image: "plain-yogurt.jpg",
              },
            ],
            equipment: [
              {
                id: 404647,
                name: "cheesecloth",
                localizedName: "cheesecloth",
                image: "cheesecloth.jpg",
              },
              {
                id: 405600,
                name: "sieve",
                localizedName: "sieve",
                image: "strainer.png",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
            length: {
              number: 240,
              unit: "minutes",
            },
          },
          {
            number: 2,
            step: "Transfer to bowl; discard liquid. Stir in garlic, vinegar, salt, sugar and pepper.In 8 or 9 inch round bowl, layer lettuce, then onion, red peppers and cucumber.",
            ingredients: [
              {
                id: 11821,
                name: "red pepper",
                localizedName: "red pepper",
                image: "red-pepper.jpg",
              },
              {
                id: 11206,
                name: "cucumber",
                localizedName: "cucumber",
                image: "cucumber.jpg",
              },
              {
                id: 11252,
                name: "lettuce",
                localizedName: "lettuce",
                image: "iceberg-lettuce.jpg",
              },
              {
                id: 2053,
                name: "vinegar",
                localizedName: "vinegar",
                image: "vinegar-(white).jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image: "garlic.png",
              },
              {
                id: 1002030,
                name: "pepper",
                localizedName: "pepper",
                image: "pepper.jpg",
              },
              {
                id: 11282,
                name: "onion",
                localizedName: "onion",
                image: "brown-onion.png",
              },
              {
                id: 19335,
                name: "sugar",
                localizedName: "sugar",
                image: "sugar-in-bowl.png",
              },
              {
                id: 2047,
                name: "salt",
                localizedName: "salt",
                image: "salt.jpg",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "bowl.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Spread top with yogurt mixture. Refrigerate, loosely covered, for up to 12 hours.",
            ingredients: [
              {
                id: 0,
                name: "spread",
                localizedName: "spread",
                image: "",
              },
              {
                id: 1116,
                name: "yogurt",
                localizedName: "yogurt",
                image: "plain-yogurt.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 720,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "Sprinkle with feta cheese and mint.",
            ingredients: [
              {
                id: 1019,
                name: "feta cheese",
                localizedName: "feta cheese",
                image: "feta.png",
              },
              {
                id: 2064,
                name: "mint",
                localizedName: "mint",
                image: "mint.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 5,
            step: "Garnish with olives and tomatoes.",
            ingredients: [
              {
                id: 11529,
                name: "tomato",
                localizedName: "tomato",
                image: "tomato.png",
              },
              {
                id: 9195,
                name: "olives",
                localizedName: "olives",
                image: "olives-mixed.jpg",
              },
            ],
            equipment: [],
          },
        ],
      },
    ],
    spoonacularSourceUrl: "https://spoonacular.com/layered-greek-salad-649354",
    nutrition: {
      nutrients: [
        {
          name: "Carbohydrates",
          amount: 13.1783,
          unit: "g",
        },
      ],
    },
  },
];
export default function RecipeResults(props) {
  // console.log(props.items)
  const menuCtx = useContext(MenuContext);
  return (
    <Row className={classes.col}>
      {DUMMY_RECIPES.length > 0 &&
        DUMMY_RECIPES.map((recipe) => (
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
            className={`bg-light border ${classes.col}`}
          >
            <MenuItem
              id={recipe.id}
              price={(recipe.pricePerServing/100).toFixed(2)}
              healthScore={recipe.healthScore}
              readyInMinutes={recipe.readyInMinutes}
              vegan={recipe.vegan}
              title={recipe.title} //string
              image={recipe.image} //url
              summary={recipe.summary} //array
              onAdd={menuCtx.addItem.bind(null, { id: recipe.id })}
              onRemove={menuCtx.removeItem.bind(null, recipe.id)}
              onClear={menuCtx.clearMenu}
            ></MenuItem>
          </Col>
        ))}
    </Row>
  );
}
