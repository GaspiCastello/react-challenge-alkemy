import React, { useContext } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
// import styled from "@emotion/styled";
// import "./styles.css";
// import "./styles-custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./RecipeForm.module.css";
import { useAxios } from "../../hooks/use-axios";
import { MenuContext } from "../../store/menu-context";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="form-control" {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className={`${classes.checkbox} form-check-form-check-label`}>
        <input
          className="form-check-input"
          {...field}
          {...props}
          type="checkbox"
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyRange = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "range" });
  return (
    <>
      <label className="range" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max={props.max}
        {...field}
        {...props}
      />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div className="form-check">
      <label className="form-check-label">
        <input
          className="form-check-input"
          {...field}
          {...props}
          type="radio"
        />
        {label}
      </label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const RecipeForm = (props) => {
  const { response, fetchData } = useAxios();
  const menuCtx = useContext(MenuContext);
  const { apiKey } = menuCtx;
  return (
    <>
      <h1 className="h1">Look for a new recipe!</h1>
      <Formik
        initialValues={{
          title: "",
          ingredients: "",
          cuisine: "", // added for our select
          carbs: 200,
          diet: "",
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          title: Yup.string().min(2, "Must be 2 characters or more"),
          // .required("Required"),
          ingredients: Yup.string()
            .min(2, "Must be 2 characters or more")
            .matches(
              /^[abcdefghijklmnopqrstuvwxyz,]+$/,
              "Please enter online valid characters, comma separated"
            ),
          // .required("Required"),
          diet: Yup.string(),
          //   .required("Required"),
          acceptedTerms: Yup.boolean()
            // .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          cuisine: Yup.string()
            // specify the set of valid values for job type
            // @see http://bit.ly/yup-mixed-oneOf
            .oneOf(
              [
                "african",
                "american",
                "greek",
                "italian",
                "Latin American",
                "indian",
                "french",
              ],
              "Invalid Job Type"
            ),
          // .required("Required"),
          //   carbs: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          console.log(values.ingredients.trim());
          const query = `?query=${values.title}&cuisine=${
            values.cuisine
          }&diet=${values.diet}&maxCarbs=${
            values.carbs
          }&includeIngredients=${values.ingredients.trim()}&apiKey=${apiKey}&number=4&addRecipeInformation=true`;
          console.log(query);
          fetchData({
            method: "get",
            url: `/recipes/complexSearch${query}`,
            headers: { accept: "*/*" },
          });
          setSubmitting(false);
          // console.log(response)
          props.onSubmit(response);
        }}
      >
        {({ isSubmitting, isValid, values }) => (
          <Form>
            <MyTextInput
              label="Title"
              name="title"
              type="text"
              placeholder="part of the title"
            />
            <MyTextInput
              label="Ingredients"
              name="ingredients"
              type="text"
              placeholder="ingredients"
            />
            <MySelect label="Cuisine" name="cuisine">
              <option value="">Select a cuisine type</option>
              <option value="african">African</option>
              <option value="american">American</option>
              <option value="italian">Italian</option>
              <option value="greek">Greek</option>
              <option value="Latin American">Latin american</option>
              <option value="indian">Indian</option>
              <option value="french">French</option>
            </MySelect>

            <MyRange label="Max carbs 0-200 g" name="carbs" type="range" max="200" />

            <div className="radios">
              <MyRadio
                label="Gluten free"
                name="diet"
                type="radio"
                value="gluten-free"
              />

              <MyRadio label="Paleo" name="diet" type="radio" value="paleo" />
              <MyRadio label="Vegan" name="diet" type="radio" value="vegan" />
              <MyRadio
                label="Vegetarian"
                name="diet"
                type="radio"
                value="vegetarian"
              />
              <MyCheckbox name="acceptedTerms">
                I accept the terms and conditions
              </MyCheckbox>
            </div>

            <button
              className={`btn btn-primary ${classes.button}`}
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              SUBMIT
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default RecipeForm;
