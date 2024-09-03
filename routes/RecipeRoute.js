const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/middleware");
const {
  getPublicRecipes,
  getAllRecipes,
  createRecipe,
  searchRecipes,
  deleteRecipe,
  editRecipe,
} = require("../controllers/RecipeController");

router.get('/public', getPublicRecipes);



router.get('/',getAllRecipes);
router.post("/recipe", createRecipe);
router.delete("/recipe/:id", deleteRecipe);
router.put("/recipe/:id", editRecipe);
router.get("/recipe", verifyToken, getAllRecipes);
router.get("/searchRecipes/:key", searchRecipes);


module.exports = router;
