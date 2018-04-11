var cookieMonster = {
  name: "Fred",

  hair: "blue",

  favoriteFoods : ["cookies"],

  goodFoods : ["pizza", "skittles"],

  badFoods : ["water", "banana"],

  hatedFoods : ["spinach"],

  isFavoriteFood : function(foodItem) {
    return this.favoriteFoods.indexOf(foodItem) > -1;
  },

  isGoodFood : function(foodItem) {
    return this.goodFoods.indexOf(foodItem) > -1;
  },

  isBadFood : function(foodItem) {
    return this.badFoods.indexOf(foodItem) > -1;
  },

  isHatedFood : function(foodItem) {
    return this.hatedFoods.indexOf(foodItem) > -1;
  },

  eat : function(food) {
    var score = 0;

    for (var i = 0; i < food.length; i += 1) {
      var foodItem = food[i];

      if (this.isFavoriteFood(foodItem)) {
        score += 2;
      } else if (this.isGoodFood(foodItem)) {
        score += 1;
      } else if (this.isBadFood(foodItem)) {
        score -= 1;
      } else if (this.isHatedFood(foodItem)) {
        score -= 2;
      }
    }

    return score;
  },

  isAlrightMeal : function(food) {
    var score = this.eat(food);

    if (score >= -1 && score <= 1) {
      return true;
    }

    return false;
  }
};

/********/
module.exports = cookieMonster; // Don't touch this line
