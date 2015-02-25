(function() {
  var app = angular.module('iceCreamPizza', []);

  app.controller('RestaurantController', function(){
    this.products = pizzas;
    });

  var pizzas = [
  { name: 'Veggie Delight', price: 1.95, description: 'all veggies, all the time...', canPurchase: true, soldOut: false },
  { name: 'Tofurky Jerky', price: 2.95, description: 'a bit on the chewy side', canPurchase: true, soldOut: false },
  { name: 'Rita\'s Margarita', price: 5.95, description: 'No, we didn\'t spell that wrong - it has tequilla in the crust', canPurchase: true, soldOut: false },
  { name: 'Cali Cauli', price: 0.95, description: 'ew gross', canPurchase: true, soldOut: false }
  ];

})();


// var iceCream = {name: 'Rocky Road', price: 2.50, description: 'a few rocks, a peppble or two"'}
