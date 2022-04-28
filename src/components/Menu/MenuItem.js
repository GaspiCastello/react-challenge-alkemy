import { useContext, useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  Container,
  Row,
  Col,
  CardText,
} from "reactstrap";
import { MenuContext } from "../../store/menu-context";
import classes from "./MenuItem.module.css";

export default function MenuItem(props) {
  const menuCtx = useContext(MenuContext);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const onDetailsHandler = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <Card className={classes.itemCard}>
      <CardImg alt="Card image cap" src={props.image} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle tag="h6">Description:</CardSubtitle>
        <CardText
          dangerouslySetInnerHTML={{ __html: props.summary }}
        ></CardText>
        <Container>
          <Row>
            <Col>
              <Button
                className={classes.viewmore}
                size="sm"
                onClick={onDetailsHandler}
              >
                {isCollapsed ? "Close Details" : "View Details"}
              </Button>
            </Col>
            {menuCtx.items.filter((id) => id === props.id.toString()).length >
              0 && (
              <Col>
                <Button
                  className={classes.viewmore}
                  color="danger"
                  size="sm"
                  onClick={props.onRemove}
                >
                  Remove
                </Button>
              </Col>
            )}

            {menuCtx.items.filter((id) => id === props.id.toString()).length ===
              0 && (
              <Col>
                <Button
                  className={classes.viewmore}
                  color="success"
                  size="sm"
                  onClick={props.onAdd}
                >
                  Add to menu
                </Button>
              </Col>
            )}
          </Row>
        </Container>
        {isCollapsed && (
          <Container>
            <Row>
              <Col>
                <ul className={classes.details}>
                  <li>Price per serving: {`$${props.price}`}</li>
                  <li>Health Score: {`${props.healthScore}%`}</li>
                  <li>Preparation is {`${props.readyInMinutes}`} minutes</li>
                  <li>{props.vegan ? "Vegan" : "Not vegan"}</li>
                </ul>
              </Col>
            </Row>
          </Container>
        )}
      </CardBody>
    </Card>
  );
}
