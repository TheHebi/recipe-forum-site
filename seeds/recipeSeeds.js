const Recipe = require("../models/Recipe");

const recipeData = [
  {
    recipe_image: "https://images.unsplash.com/photo-1588484588657-0bbbee05132f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    recipe_name: "French Toast",
    prep_time: 20,
    cook_time: 10,
    UserId: 3,
  },
  {
    recipe_image: "https://images.unsplash.com/photo-1582995570162-9dee25247fda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
    recipe_name: "French Crepes",
    prep_time: 10,
    cook_time: 10,
    UserId: 2,
  },
  {
    recipe_image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1211&q=80",
    recipe_name: "Spaghetti with meat sauce",
    prep_time: 15,
    cook_time: 70,
    UserId: 1,
  },
  {
    recipe_image: "https://images.unsplash.com/photo-1568486504489-9e70d75313b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    recipe_name: "Bavarian Pretzel",
    prep_time: 60,
    cook_time: 15,
    UserId: 4,
  },
  {
    recipe_image: "https://images.unsplash.com/photo-1523920625794-b8cd4b38eb00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    recipe_name: "Cajun Crawfish boil",
    prep_time: 30,
    cook_time: 120,
    UserId: 2,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;
