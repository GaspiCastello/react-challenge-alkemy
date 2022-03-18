import { Fragment } from "react";
import { Container,Row,Col } from "reactstrap";

import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <Container>
        <Row>
          <Col
            md={{
              offset: 2,
              size: 8,
            }}
            sm="12"
          >
            {props.children}
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Layout;
