//  This file stores the data in three arrays of objects
// 1. choices :  choices stores the data to be shown in select. key stores the name of the tag used to select the next select menu.
//               options hold the options associated with the choices and description holds the instruction for the user related to the select.
// 2. recipes :  recipes stores two variables. first key which again stores the value used to select the object. second options which store the
//               food items for the particular ingredients. this is used for displaying the pictures of food items.
// 3. food :     stoees the key that holds the name of the dish and the url of the picture associated with in in img and the url to download the
//               pdf form of the recipe
// All the recipes are taken from allrecipes.com and pictures from google

var selectInfo = {
  choices: [
    {
      key: "Main",
      option: ["Tortilla", "Rice", "Salad Greens", "Pasta"],
      description: "Select the core Ingredient",
    },
    {
      key: "Tortilla",
      option: ["Chicken", "Salsa"],
      description: "Select the 2nd Ingredient",
    },
    {
      key: "Rice",
      option: ["Meat", "Red Beans"],
      description: "Select the 2nd Ingredient",
    },
    {
      key: "Salad Greens",
      option: ["Shredded Chicken", "Boiled Eggs"],
      description: "Select the 2nd Ingredient",
    },
    {
      key: "Pasta",
      option: ["Beef", "Chicken Breasts"],
      description: "Select the 2nd Ingredient",
    },

    {
      key: "Chicken",
      option: ["Queso", "Mexican Blend Cheese", "Avacado Dip"],
      description: "Select the 3rd Ingredient",
    },
    {
      key: "Salsa",
      option: ["Cheese Dip", "Mozrella Cheese"],
      description: "Select the 3rd Ingredient",
    },

    {
      key: "Meat",
      option: ["Salsa Roja", "Egg"],
      description: "Select the 3rd Ingredient",
    },
    {
      key: "Red Beans",
      option: ["Hot Sauce", "Sausage"],
      description: "Select the 3rd Ingredient",
    },

    {
      key: "Shredded Chicken",
      option: ["Guacamole", "Mayonnaise"],
      description: "Select the 3rd Ingredient",
    },
    {
      key: "Boiled Eggs",
      option: ["Cheese", "Mayo"],
      description: "Select the 3rd Ingredient",
    },

    {
      key: "Beef",
      option: ["Tomato Sauce", "Pork Sausage"],
      description: "Select the 3rd Ingredient",
    },
    {
      key: "Chicken Breasts",
      option: ["Parmesan Cheese", "Cheddar Cheese"],
      description: "Select the 3rd Ingredient",
    },
  ],
  recipes: [
    {
      key: "Queso",
      options: ["Chicken Nacho", "Chicken Quesorito"],
    },
    {
      key: "Mexican Blend Cheese",
      options: ["Chicken Quesadilla", "Chicken Cheese Taquito"],
    },
    {
      key: "Avacado Dip",
      options: ["Soft Shell Tacos", "Crispy Shell Tacos"],
    },
    {
      key: "Cheese Dip",
      options: ["Plain Nachos", "Chips with dips"],
    },
    {
      key: "Mozrella Cheese",
      options: ["Tortilla Pizza", "Enchiladas"],
    },
    {
      key: "Salsa Roja",
      options: ["Rice Bowl"],
    },
    {
      key: "Egg",
      options: ["Loco Moco"],
    },
    {
      key: "Hot Sauce",
      options: ["Salsa Chicken Soup"],
    },
    {
      key: "Sausage",
      options: ["Sausage and Bean Rice"],
    },
    {
      key: "Guacamole",
      options: ["Mexican Salad Bowl"],
    },
    {
      key: "Mayonnaise",
      options: ["Classic Chicken Salad"],
    },
    {
      key: "Cheese",
      options: ["Cobb Salad"],
    },
    {
      key: "Mayo",
      options: ["Creamy Egg Salad"],
    },
    {
      key: "Tomato Sauce",
      options: [
        "Spaghetti and Meat Balls",
        "American Chop Suey",
        "American Goulash",
      ],
    },
    {
      key: "Pork Sausage",
      options: ["Italian Sausage Ragu Sauce"],
    },
    {
      key: "Parmesan Cheese",
      options: ["Chicken Alfredo Bake"],
    },
    {
      key: "Cheddar Cheese",
      options: ["Mac N Cheese"],
    },
  ],
  food: [
    {
      key: "Chicken Nacho",
      image: "img/1.jpg",
      pdf: "docs/1.pdf",
      ingredients: ["Tortilla", "Chicken", "Queso"],
    },
    {
      key: "Chicken Quesorito",
      image: "img/2.jpg",
      pdf: "docs/2.pdf",
      ingredients: ["Tortilla", "Chicken", "Queso"],
    },
    {
      key: "Chicken Quesadilla",
      image: "img/3.jpeg",
      pdf: "docs/3.pdf",
      ingredients: ["Tortilla", "Chicken", "Cheese"],
    },
    {
      key: "Chicken Cheese Taquito",
      image: "img/4.jpg",
      pdf: "docs/4.pdf",
      ingredients: ["Tortilla", "Chicken", "Cheese"],
    },
    {
      key: "Soft Shell Tacos",
      image: "img/5.jpg",
      pdf: "docs/5.pdf",
      ingredients: ["Tortilla", "Chicken", "Avacado Dip"],
    },
    {
      key: "Crispy Shell Tacos",
      image: "img/6.jpg",
      pdf: "docs/6.pdf",
      ingredients: ["Tortilla", "Chicken", "Avacado Dip"],
    },
    {
      key: "Plain Nachos",
      image: "img/7.jpg",
      pdf: "docs/7.pdf",
      ingredients: ["Tortilla", "Salsa", "Cheese Dip"],
    },
    {
      key: "Chips with dips",
      image: "img/8.jpg",
      pdf: "docs/8.pdf",
      ingredients: ["Tortilla", "Salsa", "Cheese Dip"],
    },
    {
      key: "Tortilla Pizza",
      image: "img/9.jpg",
      pdf: "docs/9.pdf",
      ingredients: ["Tortilla", "Salsa", "Cheese"],
    },
    {
      key: "Enchiladas",
      image: "img/10.jpg",
      pdf: "docs/10.pdf",
      ingredients: ["Tortilla", "Salsa", "Cheese"],
    },
    {
      key: "Rice Bowl",
      image: "img/11.jpg",
      pdf: "docs/11.pdf",
      ingredients: ["Rice", "Meat", "Salsa Roja"],
    },
    {
      key: "Loco Moco",
      image: "img/12.jpg",
      pdf: "docs/12.pdf",
      ingredients: ["Rice", "Meat", "Egg"],
    },
    {
      key: "Salsa Chicken Soup",
      image: "img/13.jpg",
      pdf: "docs/13.pdf",
      ingredients: ["Rice", "Red Beans", "Hot Sauce"],
    },
    {
      key: "Sausage and Bean Rice",
      image: "img/14.jpg",
      pdf: "docs/14.pdf",
      ingredients: ["Rice", "Red Beans", "Hot Sauce"],
    },
    {
      key: "Mexican Salad Bowl",
      image: "img/15.jpg",
      pdf: "docs/15.pdf",
      ingredients: ["Salad Greens", "Chicken", "Guacamole"],
    },
    {
      key: "Classic Chicken Salad",
      image: "img/16.jpg",
      pdf: "docs/16.pdf",
      ingredients: ["Salad Greens", "Chicken", "Mayonnaise"],
    },
    {
      key: "Cobb Salad",
      image: "img/17.jpg",
      pdf: "docs/17.pdf",
      ingredients: ["Salad Greens", "Boiled Eggs", "Cheese"],
    },
    {
      key: "Creamy Egg Salad",
      image: "img/18.jpg",
      pdf: "docs/18.pdf",
      ingredients: ["Salad Greens", "Boiled Eggs", "Mayo"],
    },
    {
      key: "Spaghetti and Meat Balls",
      image: "img/19.jpg",
      pdf: "docs/19.pdf",
      ingredients: ["Pasta", "Beef", "Tomato"],
    },
    {
      key: "American Chop Suey",
      image: "img/20.jpg",
      pdf: "docs/20.pdf",
      ingredients: ["Pasta", "Beef", "Tomato"],
    },
    {
      key: "American Goulash",
      image: "img/21.jpg",
      pdf: "docs/21.pdf",
      ingredients: ["Pasta", "Beef", "Tomato"],
    },
    {
      key: "Italian Sausage Ragu Sauce",
      image: "img/22.jpg",
      pdf: "docs/22.pdf",
      ingredients: ["Pasta", "Beef", "Pork Sausage"],
    },
    {
      key: "Chicken Alfredo Bake",
      image: "img/23.jpg",
      pdf: "docs/23.pdf",
      ingredients: ["Pasta", "Chicken Breasts", "Parmesan Cheese"],
    },
    {
      key: "Mac N Cheese",
      image: "img/24.jpg",
      pdf: "docs/24.pdf",
      ingredients: ["Pasta", "Chicken Breasts", "Cheddar Cheese"],
    },
  ],
};
