/**
    getUserNameFromLocalStorage function gets the user name from
     local storage, it returns false if value is not found in local 
     storage username is stored as username in local storage.
*/
function getUserNameFromLocalStorage() {
  if (localStorage.getItem("username")) {
    return localStorage.getItem("username");
  } else {
    return false;
  }
}

/**
      getEmailFromLocalStorage function gets the user email from local storage, it returns false if value is not found in local storage.
      email is stored as email in local storage
  */
function getEmailFromLocalStorage() {
  if (localStorage.getItem("email")) {
    return localStorage.getItem("email");
  } else {
    return false;
  }
}

/**
      getRecipesFromLocalStorage function gets the saved recipes from local storage, it returns false if value is not found in local storage.
      recipe is stored as recipe in local storage
  */
function getRecipesFromLocalStorage() {
  if (localStorage.getItem("recipes")) {
    recipes = localStorage.getItem("recipes");
    return JSON.parse(recipes);
  } else {
    return false;
  }
}
/**
	setUserLocalStorage function sets the username, email values to local storage
*/
function setUserLocalStorage(username, email) {
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
}

// Stores recipes and length in the local storage

function setRecipeFromLocalStorage(recipe) {
  var recipes = localStorage.getItem("recipes");
  recipes = JSON.parse(recipes);
  console.log(recipes);
  console.log(recipe + " to be added");
  if (recipes == null) {
    var recipes = [];
    recipes[0] = recipe;
    console.log(recipes);
    var index = 1;
    localStorage.setItem("length", index);
  } else {
    var index = localStorage.getItem("length");
    recipes[index++] = recipe;
    console.log(recipes);
    console.log(index);
    localStorage.setItem("length", index);
  }
  localStorage.setItem("recipes", JSON.stringify(recipes));
}
