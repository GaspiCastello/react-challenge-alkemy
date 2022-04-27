# Menu app for a restaurant

This project is part of the challenge to enter in the acceleration program of Alkemy

## Functionality and scope

* Provide a safe login with auto logout and preventing to loose session when browser refreshes.
* Validating the form when a field is incorrect and handling errors in the post request.
* Searching for recipes with a wide range of criteria: Ingredientes, Title, Max carbs, Cuisine, Diet.
* Add and remove a recipe from the results checking restrictions: only two recipes vegan and two not vegan.
* Also show in the menu page this metrics: Acumulated price, Average health score and Average time of preparation.


## Install and start

### `npm install`

* Set apiKey variable in menu-context.js file, (line 74) with the key provided by [Spoonacular](https://spoonacular.com/) api, example:

### `apyKey=23gr0qyb0t`

* Start developer server  

### `npm start`

* Login with
user:challenge@alkemy.org,
password:react

## Technologies and libraries
* React
* Formik
* Sweetalert
* Yup
* Axios
* Reacstrap/bootstrap
* React-router

