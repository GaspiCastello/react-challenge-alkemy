import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col,Spinner } from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import MenuItem from "./MenuItem.js";
import classes from "./MenuList.module.css";

const MenuList = (props) => {
  const menuCtx = useContext(MenuContext);
  const { items } = menuCtx.items;

  let content = (
    <Button>
      <Link className={classes.link} to="/add-recipe">
        Add items to menu
      </Link>
    </Button>
  );

  if (items && items.length > 0) {
    content = (
      <Container>
        <Row>
          <Col className="bg-light border" sm="3" xs="6">
            {items.map((recipe) => (
              <MenuItem
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                onRemove={menuCtx.menuItemRemoveHandler.bind(null, recipe.id)}
                onAdd={menuCtx.menuItemAddHandler.bind(null, { ...recipe, amount: 1 })}
              ></MenuItem>
            ))}
          </Col>
        </Row>
      </Container>
    );
  }

  if (props.error) {
    content = <Button onClick={props.onFetch}>Try again</Button>;
  }

  if (props.loading) {
    content = <Spinner className={classes.spinner} />
  }

  return <div className={classes.container}>{content}</div>;
};

export default MenuList;
