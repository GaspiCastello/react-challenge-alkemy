import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import AuthContext from "../../store/auth-context";
import classes from "./AuthForm.module.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
  Card,
} from "reactstrap";
import useInput from "../../hooks/use-input";
import swal from "sweetalert";

const AuthForm = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));
  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length > 3);
  let formIsValid = false;

  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (!formIsValid) {
      // alert('Some fields are empty or have an error')
      return swal("Something went wrong", "Check for errors in the fields");
    }
    setIsLoading(true);
    const res = await axios
      .post("http://challenge-react.alkemy.org/", {
        email: enteredEmail,
        password: enteredPassword,
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return swal(error.response.data.error, "", "warning");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          return swal(console.log(error.request));
        } else {
          // Something happened in setting up the request that triggered an Error
          return swal(console.log("Error", error.message));
        }
        
      });
    setIsLoading(false);
    const expirationTime = new Date(new Date().getTime() + 3600000);
    console.log(res.data.token);
    authCtx.login(res.data.token, expirationTime.toISOString());
    navigate("/", { replace: true });
    resetEmailInput();
    resetPasswordInput();
  }
  return (
    <Card body className={classes.auth}>
      <Form inline onSubmit={submitHandler}>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="exampleEmail">
            Email
          </Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="something@idk.cool"
            type="email"
            invalid={emailInputHasError}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
        </FormGroup>
        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
          <Label className="me-sm-2" for="examplePassword">
            Password
          </Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="don't tell!"
            type="password"
            invalid={passwordInputHasError}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
          />
        </FormGroup>
        {isLoading ? (
          <Spinner className={classes.spinner} />
        ) : (
          <Button>Submit</Button>
        )}
      </Form>
    </Card>
  );
};

export default AuthForm;
