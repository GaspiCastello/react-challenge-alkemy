import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Spinner } from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "./MenuItem.js";
import classes from "./MenuList.module.css";

// /recipes/informationBulk?ids=715538,716429

const MenuList = (props) => {
  const menuCtx = useContext(MenuContext);
  // const { items } = menuCtx.items;

  let content = (
    <Link className={classes.link} to="/add-recipe">
      Add items to menu
    </Link>
  );


  if (props.error) {
    content = <Button onClick={props.onFetch}>Try again</Button>;
  }

  if (props.loading) {
    content = <Spinner className={classes.spinner} />;
  }

  return <div className={classes.container}>{content}</div>;
};

export default MenuList;
