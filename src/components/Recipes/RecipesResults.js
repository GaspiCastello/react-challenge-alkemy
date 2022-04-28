import { useContext } from "react";
import { Row, Col } from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "../Menu/MenuItem";
import classes from "./RecipeResults.module.css";
// endpoint and query /recipes/complexSearch?query=salad&cuisine=greek&diet=vegetarian&maxCarbs=2000&includeIngredients=tomatoes&apiKey=08431604f5ee4f9e80c2d592bfb26980&number=2&addRecipeInformation=true

export default function RecipeResults({ items }) {
  // console.log(items)
  const menuCtx = useContext(MenuContext);
  return (
    <Row className={classes.col}>
      {items.length === 0 && <p>No results, try again</p>}
      {items.length > 0 &&
        items.map((recipe) => (
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
