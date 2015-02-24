iceCreamPizza.controller('IceCreamCtrl', function IceCreamCtrl($scope, RestaurantFactory) {
  $scope.pizza = RestaurantFactory.pizza;
  $scope.addPizzaToOrder = function(pizza) {
    pizza.includePizza = true;
  };
});
