const mongoose = require("mongoose");
const Recipe = require("../Schema/RecipeSchema");

mongoose.connect(
  "mongodb+srv://sidanace:MdlLw5pqMElfT0v7@cluster0.a6o8ccd.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const defaultRecipes = [
  {
    title: "Scrambled Eggs",
    imageUrl:
      "https://img.freepik.com/free-photo/high-angle-omelette-breakfast-with-tomatoes-herbs_23-2148417372.jpg?t=st=1717954554~exp=1717958154~hmac=81a467b63ca9a436c994cb4812553cd74bc3fcc31fdc7971ebd6cdc73eae31f3&w=740",
    ingredients: ["3 eggs", "Salt", "Pepper", "Butter"],
    instructions:
      "To make scrambled eggs, crack 2-3 eggs into a bowl, add salt and pepper, and optionally a splash of milk or cream. Whisk until well combined. Heat a non-stick skillet over medium-low heat, melt some butter or oil, and pour in the eggs. Let them sit briefly, then gently stir with a spatula, pushing from the edges to the center. Cook until the eggs are mostly set but still slightly runny. Remove from heat and stir once more to finish cooking. Serve immediately, optionally garnished with chopped herbs.",
    createdBy: null, 
  },
  {
    title: "Mumbai Masala Sprouts Sandwich",
    imageUrl:
      "https://img.freepik.com/free-photo/club-sandwich-with-side-french-fries_140725-1744.jpg?t=st=1717954516~exp=1717958116~hmac=72819db2d7aebaaa533713655e55bea4267461b02402a7f6e916549440b54f64&w=740", // Image unavailable due to privacy restrictions
    ingredients: [
      "2 slices of whole wheat bread",
      "1 cup sprouted moong dal (mung beans)",
      "1/4 cup chopped red onion",
      "1/4 cup chopped tomato",
      "1 green chili, chopped (optional)",
      "1 tbsp chopped coriander leaves",
      "1/2 tsp chaat masala",
      "Salt to taste",
      "Cooking oil for sauteing",
    ],
    instructions:
      "1. Heat oil in a pan. Saute onion until softened. 2. Add sprouted moong dal, tomato, green chili (if using), and cook for 2-3 minutes. 3. Add chaat masala and salt. 4. Toast bread lightly. 5. Spread the sprout mixture on one slice and sprinkle with coriander leaves. 6. Top with the other slice of bread.",
    createdBy: null,
  },

  {
    title: "Palak Paneer",
    imageUrl:
      "https://img.freepik.com/free-photo/flat-lay-pakistani-food-arrangement_23-2148825110.jpg?t=st=1717952579~exp=1717956179~hmac=fbe96c7f9a83e753b15d4af3028484cb15e282fe512bc3824e14435a71b432e7&w=740", // Image unavailable due to privacy restrictions
    ingredients: [
      "Spinach (palak), washed and chopped",
      "Paneer cheese, cubed",
      "Onions, chopped",
      "Tomatoes, chopped",
      "Ginger-garlic paste",
      "Garam masala",
      "Red chili powder",
      "Cream (optional)",
      "Oil for cooking",
      "Salt to taste",
    ],
    instructions:
      "1. Blanch spinach, grind into a smooth puree. 2. Saute onions in oil, add ginger-garlic paste, cook until fragrant. 3. Add chopped tomatoes, cook until mushy. 4. Add garam masala, red chili powder, turmeric powder, and cook for a minute. 5. Stir in spinach puree, simmer for 5 minutes. 6. Add paneer cubes, cream (if using), and salt. 7. Simmer for a few minutes, garnish with coriander leaves (optional).",
    createdBy: null,
  },
  {
    title: "Dhokla",
    imageUrl:
      "https://img.freepik.com/premium-photo/gujarati-khaman-dhokla-made-using-chana-dal-served-with-green-chutney-selective-focus_466689-2619.jpg?w=740", // Image unavailable due to privacy restrictions
    ingredients: [
      "Gram flour (besan)",
      "Semolina (sooji)",
      "Yogurt",
      "Fruit salts (eno)",
      "Water",
      "Ginger-green chili paste",
      "Sugar",
      "Mustard seeds",
      "Curry leaves",
      "Green chilies (chopped)",
      "Cilantro (chopped)",
    ],
    instructions:
      "1. Soak gram flour and semolina in yogurt for a few hours. 2. Add fruit salts and whisk to form a batter. 3. Grease a mold, pour batter, and steam for 20-25 minutes. 4. For tempering, heat oil, add mustard seeds, curry leaves, and chopped chilies. 5. Pour tempering over dhokla, sprinkle with sugar and chopped coriander. 6. Cut into pieces and serve with chutney.",
    createdBy: null,
  },
  {
    title: "Chocolate Chip Cookies",
    imageUrl:
      "https://img.freepik.com/premium-photo/cookie-with-chocolate-lies-stone-board-with-cup-coff_105580-49.jpg?w=740", // Image unavailable due to privacy restrictions
    ingredients: [
      "All-purpose flour",
      "Baking soda",
      "Salt",
      "Unsalted butter, softened",
      "Brown sugar",
      "Granulated sugar",
      "Eggs",
      "Vanilla extract",
      "Semi-sweet chocolate chips",
    ],
    instructions:
      "1. Preheat oven. In a bowl, whisk flour, baking soda, and salt. 2. In another bowl, cream together butter and sugars. 3. Beat in eggs one at a time, then stir in vanilla. 4. Gradually add dry ingredients to wet ingredients, then mix in chocolate chips. 5. Drop by tablespoons onto baking sheets lined with parchment paper. 6. Bake for 10-12 minutes or until golden brown. Let cool slightly before serving.",
    createdBy: null,
  },
  {
    title: "Vanilla Cake",
    imageUrl:
      "https://images.stockcake.com/public/2/7/a/27af6f0b-8d15-4f44-b2ad-4a5d7e29e30b_large/celebratory-sprinkle-cake-stockcake.jpg", // Image unavailable due to privacy restrictions
    ingredients: [
      "All-purpose flour",
      "Baking powder",
      "Salt",
      "Unsalted butter, softened",
      "Granulated sugar",
      "Eggs",
      "Vanilla extract",
      "Milk",
    ],
    instructions:
      "1. Preheat oven. Grease and flour cake pans. 2. In a bowl, whisk flour, baking powder, and salt. 3. Cream butter and sugar until light and fluffy. 4. Beat in eggs one at a time, then stir in vanilla. 5. Alternately add dry ingredients and milk to the wet ingredients, mixing until just combined. 6. Pour batter into prepared pans and bake for 25-30 minutes or until a toothpick inserted comes out clean. 7. Cool cakes completely before frosting (optional).",
    createdBy: null,
  },
  {
    title: "Farmhouse Pizza",
    imageUrl:
      "https://img.freepik.com/free-photo/delicious-pizza-indoors_23-2150873994.jpg?t=st=1717952938~exp=1717956538~hmac=0618dc11cbd0f96303476785193daf4dd30e281456df3fe1c8b1016ffb36af70&w=826", // Image unavailable due to privacy restrictions
    ingredients: [
      "Pizza dough (store-bought or homemade)",
      "Pizza sauce",
      "Mozzarella cheese",
      "Onions, thinly sliced",
      "Bell peppers (red, yellow, or green), thinly sliced",
      "Mushrooms, thinly sliced",
      "Tomatoes, thinly sliced",
      "Baby corn (optional)",
      "Jalapenos (optional, sliced)",
      "Black olives, sliced",
    ],
    instructions:
      "To make a pizza, preheat the oven to 400°F (200°C). Roll out the pizza dough on a floured surface and spread pizza sauce over it, leaving a small border. Sprinkle mozzarella cheese generously, then add sliced onions, bell peppers, mushrooms, tomatoes, and optionally, baby corn, jalapenos, and black olives. Drizzle with olive oil and sprinkle with oregano and red chili flakes if desired. Bake for 15-20 minutes until the crust is golden and cheese is bubbly. Garnish with fresh basil leaves before serving if desired.",
    createdBy: null,
  },
  {
    title: "Chicken Biryani",
    imageUrl:
      "https://img.freepik.com/free-photo/close-up-appetizing-ramadan-meal_23-2151182540.jpg?t=st=1717952979~exp=1717956579~hmac=7a1c53dac6503b48b78ccc9c5fe59bd36b1ead5bfaeeeb4013cdcd1752d08338&w=740", // Image unavailable due to privacy restrictions
    ingredients: [
      "Basmati rice, soaked for 30 minutes",
      "Chicken (thighs or breasts), cut into pieces",
      "Yogurt",
      "Lemon juice",
      "Ginger-garlic paste",
      "Garam masala",
      "Cumin powder",
      "Bay leaves",
      "Cinnamon stick",
      "Onions, thinly sliced (fried separately)",
    ],
    instructions:
      "To make chicken biryani, first marinate chicken pieces in a mixture of yogurt, lemon juice, ginger-garlic paste, and spices, then refrigerate. Cook basmati rice with bay leaves, cardamom pods, cloves, and cinnamon until partially done, then drain. In a large pot, sauté the marinated chicken until golden brown, add fried onions, and layer with the partially cooked rice. Sprinkle with saffron milk and ghee, then repeat the layers. Cover the pot tightly and cook on low heat until the rice is fully cooked. Garnish with coriander leaves and fried onions, and serve hot with raita or salan.",
    createdBy: null,
  },
  {
    title: "Bhel Puri",
    imageUrl:
      "https://img.freepik.com/premium-photo/bhelpuri-chaat-chat-is-road-side-tasty-food-from-india-served-bowl-plate-selective-focus_466689-37461.jpg?w=360", // Image unavailable due to privacy restrictions
    ingredients: [
      "Puffed rice (murmura)",
      "Boiled potatoes, diced",
      "Tomatoes, finely chopped",
      "Coriander leaves, chopped",
      "Sev (thin fried gram noodles)",
      "Papdi (crispy fried lentil wafers, crushed)",
      "Tamarind chutney",
      "Green chutney (mint or coriander)",
      "Lemon juice",
      "Chaat masala (optional)",
    ],
    instructions:
      "To make this snack, mix puffed rice, diced potatoes, onions, and tomatoes in a large bowl. Add chopped coriander leaves, sev, crushed papdi, and optionally roasted peanuts. Drizzle with tamarind and green chutneys, and squeeze in lemon juice. Sprinkle with chaat masala and red chili powder if desired. Gently toss everything together, adjusting chutneys and spices to taste. Serve immediately to enjoy the crispiness.",
    createdBy: null,
  },

  // Add more recipes as needed
];

const populateDB = async () => {
  try {
    await Recipe.insertMany(defaultRecipes);
    console.log("Database populated with default recipes");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error populating the database", err);
  }
};

populateDB();
