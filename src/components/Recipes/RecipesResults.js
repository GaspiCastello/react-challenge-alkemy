import { Row, Col, Container } from "reactstrap";
import axios from "axios";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "../Menu/MenuItem";

export default function RecipeResults(props) {
    const menuCtx = useContext(MenuContext);
    const { apiKey } = menuCtx;
    
    const getData = useCallback(async () => {
      const query = `?number=${3}&query=${'onion'}&apiKey=${apiKey}`;
      const url = `https://api.spoonacular.com/recipes/autocomplete${query}`;
      const res = await axios.get(url);
      console.log(res, res.data);
    })
    useEffect(() => {
      const timer = setTimeout(() => {
        // this runs always the first time, if not dependecies runs always,
        //  if dependencies:[] runs just one time
        console.log("Requesting");
        getData();
      }, 1000);
      // return doesnt run the first time, and runs before the main callback
      // (or when unmount the component)
      // So we clean up the settimeout and put the validation delay after the last key stroke
      return () => {
        clearTimeout(timer);
        console.log("cleanup");
      };
    }, [getData]);
  return (
    <Container>
      <Row>
        <Col className="bg-light border" sm="3" xs="6">
          {props.items.map((recipe) => (
            <MenuItem
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
            //   onRemove={menuCtx.removeItem.bind(null, item.id)}
            //   onAdd={menuCtx.addItem.bind(null, { ...item, amount: 1 })}
            ></MenuItem>
          ))}
        </Col>
      </Row>
    </Container>
  );
}



  