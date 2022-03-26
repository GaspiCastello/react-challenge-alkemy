import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import classes from "./RecipeForm.module.css";
import { Input, Label } from "reactstrap";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input {...field} {...props} />
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
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input type="select" {...field} {...props} />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </>
  );
};
const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <Label>
        <Input {...field} {...props} type="checkbox" />
        {children}
      </Label>
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
      <Label htmlFor={props.id || props.name}>
        {label}, is <b>{field.value}</b>
      </Label>
      <Input type="range" {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <Label>
        <Input {...field} {...props} type="radio" />
        {label}
      </Label>

      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const RecipeForm = (props) => {
  return (
    <>
      <h1 className="h1">Look for a new recipe!</h1>
      <Formik
        initialValues={{
          query: "",
          cuisine: "", // added for our select
          diet: "",
          includeIngredients: "",
          maxCarbs: 120,
          addRecipeInformation: true,
          number: 3,
          acceptedTerms: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          query: Yup.string().min(2, "Must be 2 characters or more"),
          // .required("Required"),
          includeIngredients: Yup.string()
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
          props.onSubmit(values);
          setSubmitting(false);
        }}
        // onSubmit={(values, { setSubmitting }) => {
        //   console.log(values);
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2));
        //     setSubmitting(false);
        //   }, 400);
        // }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <MyTextInput
              label="Title"
              name="query"
              type="text"
              placeholder="part of the title"
            />
            <MyTextInput
              label="Ingredients"
              name="includeIngredients"
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

            <MyRange
              label="Max carbs in grams "
              name="maxCarbs"
              type="range"
              max="120"
              min="5"
            />

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
