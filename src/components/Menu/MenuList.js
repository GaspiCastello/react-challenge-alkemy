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

export default function MenuList(props) {
  const [isDetailsOn, setIsDetailOn] = useState();
  const menuCtx = useContext(MenuContext);
  const { apiKey, items } = menuCtx;
  const { response = [], fetchData } = useAxios();
  // console.log(response, "in menulist");
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
        healthScoreAverage: (
          reducedParams.healthScore / response.length
        ).toFixed(0),
        preparationTimeAverage: (
          reducedParams.readyInMinutes / response.length
        ).toFixed(0),
      };
    }
  };
  const menuData = menuReducer();

  useEffect(() => {
    const controller = new AbortController();
    if (items.length > 0) {
      fetchData({
        method: "get",
        url: `/recipes/informationBulk`,
        headers: { accept: "*/*" },
        signal: controller.signal,
        params: { ids: items.join(), apiKey },
        // /recipes/informationBulk?ids=715538,716429
      });
    }
    return () => controller.abort();
  }, [fetchData, items, apiKey]);

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
