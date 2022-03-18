import { useContext } from "react";
import { Navbar, NavbarBrand, NavItem, Button } from "reactstrap";
import AuthContext from "../../store/auth-context";
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return (
      <Navbar className={classes.navbar}  expand="md" sticky="top" dark>
        <NavbarBrand href="/">Alkemy Challenge</NavbarBrand>
        { isLoggedIn && (
          <NavItem>
            <Button onClick={logoutHandler}>Logout</Button>
          </NavItem>
        )}
      </Navbar>
  );
};

export default MainNavigation;

