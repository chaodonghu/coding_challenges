/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function (foods, cuisines, ratings) {
  this.foods = foods;
  this.cuisines = cuisines;
  this.ratings = ratings;
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
  let foodIndex = this.foods.indexOf(food);

  this.ratings = this.ratings.map((rating, index) =>
    foodIndex === index ? newRating : rating
  );
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
  // get all the indexes for the target cuisine
  let cuisineIndexes = this.cuisines
    .map((c, index) => (c === cuisine ? index : ""))
    .filter(String);

  // gather the target foods that match the cuisine
  let cuisineFoods = cuisineIndexes.map((i) => this.foods[i]);
  // gather the target ratings that match the cuisine
  let cuisineRatings = cuisineIndexes.map((i) => this.ratings[i]);

  console.log("cuisineFoods", cuisineFoods);
  console.log("cuisineRatings", cuisineRatings);

  // get the max rating
  let max = Math.max(...cuisineRatings);

  console.log("max", max);

  let topFoodRatingIndexes = cuisineRatings
    .map((item, index) => (item === max ? index : ""))
    .filter(String);

  console.log("topFoodRatingIndex", topFoodRatingIndexes);
  if (topFoodRatingIndexes.length === 1) {
    return cuisineFoods[topFoodRatingIndexes[0]];
  }

  let topFoods = topFoodRatingIndexes
    .map((foodRatingIndex) => cuisineFoods[foodRatingIndex])
    .sort();

  return topFoods[0];
};

/**
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */
