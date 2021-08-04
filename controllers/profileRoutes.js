const router = require("express").Router();
const sequelize = require("../config/connection");
const db = require("../models");
const auth = require("../utils/auth");

// display all recipes from user
router.get("/", auth, (req, res) => {
  db.Recipe.findAll({
    where: {
      user_id: req.session.user.id,
    },
    attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time"],
    include: [
      {
        model: db.Comment,
        attributes: ["id", "content", "RecipeId", "UserId", "created_at"],
        include: { model: db.User, attributes: ["username"] },
      },
      {
        model: db.User,
        attributes: ["username"],
      },
      {
        model: db.Ingredient,
        attributes: ["id", "amount", "unit", "name", "RecipeId"]
      },
      {
        model: db.Instruction,
        attributes: ["id", "instruction", "RecipeId"]
      },
      {
        model: db.Genre,
        attributes: ["id", "name", "RecipeId", "GenreId"],
      },
    ],
  })
    .then((recipesData) => {
      const recipes = recipesData.map((recipe) =>
        recipe.toJSON()
      );
      res.render("dash", {
        recipes,
        logged_in: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display one recipe by user
router.get("/edit/:id", auth, (req, res) => {
  db.Recipe.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "recipe_name", "recipe_image", "prep_time","cook_time"],
    include: [
      {
        model: db.Comment,
        attributes: ["id", "content", "RecipeId", "UserId", "created_at"],
        include: { model: db.User, attributes: ["username"] },
      },
      {
        model: db.User,
        attributes: ["username"],
      },
      {
        model: db.Ingredient,
        attributes: ["id", "amount", "unit", "name", "RecipeId"]
      },
      {
        model: db.Instruction,
        attributes: ["id", "instruction", "RecipeId"]
      },
      {
        model: db.Genre,
        attributes: ["id", "name", "RecipeId", "GenreId"],
      },
    ],
  })
    .then((recipeData) => {
      if (!recipeData) {
        res.status(404).json({
          message: "No recipe found with this id",
        });
        return;
      }

      const post = recipeData.get({
        plain: true,
      });

      res.render("editPost", {
        post,
        logged_in: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// new recipe from user
router.get("/new", auth, (req, res) => {
  res.render("addPost", {
    logged_in: true,
  });
});

module.exports = router;