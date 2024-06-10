const Recipe = require("../Schema/RecipeSchema");

const createRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, imageUrl } = req.body;

    const newRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
      imageUrl,
    });

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPublicRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find(); 
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();

    res.status(200).json(allRecipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const searchRecipes = async (req, res) => {
  const searchKey = req.params.key;

  try {
    const recipes = await Recipe.find({
      title: { $regex: new RegExp(searchKey, "i") },
    });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found" });
    }

    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error searching recipes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getPublicRecipes,
  getAllRecipes,
  createRecipe,
  searchRecipes,
};
