iceCreamPizza.factory('RestaurantFactory', function RestaurantFactory() {
  var factory = {};
  factory.pizza = [];

  factory.addpizza = function() {
    var pizza = { name: factory.pizzaName, includePizza: false };
    factory.pizza.push(pizza);
    factory.pizzaName = null;
  };

  factory.deletepizza = function(pizza) {
    var index = factory.pizza.indexOf(pizza);
    factory.pizza.splice(index, 1);
  };
  return factory;
});
