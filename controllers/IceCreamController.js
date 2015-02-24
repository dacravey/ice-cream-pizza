iceCreamPizza.controller('PizzaCtrl', function PizzaCtrl($scope, RestaurantFactory) {
  $scope.pizza = RestaurantFactory.pizza;
  $scope.RestaurantFactory = RestaurantFactory;
});
