(function() {
  var app = angular.module('iceCreamPizza', []);

  app.controller('RestaurantController', function(){
    this.products = pizzas;
    });

    app.controller("TabController", function() {
    this.tab = 1;

    this.setTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
  });


  var pizzas = [
  { name: 'Veggie Delight', price: 1.95, description: 'all veggies, all the time...', quantity: '5 slices', canPurchase: true, soldOut: false, images: [
        "img/veggie-pizza.jpg"
      ], },
  { name: 'Tofurky Jerky', price: 2.95, description: 'a bit on the chewy side', quantity: '2 slices', canPurchase: true, soldOut: false, images: [
          "img/tofurky.jpg",
        ],  },
  { name: 'Rita\'s Margarita', price: 5.95, description: 'No, we didn\'t spell that wrong - it has tequilla in the crust', quantity: '1 slice', canPurchase: true, soldOut: false, images: [
        "img/margarita.jpg",
      ], },
  { name: 'Cali Cauli', price: 0.95, description: 'ew gross', quantity: '12 slices -- please, take it all!', canPurchase: false, soldOut: false, images: [
        "img/cauli.jpg",
      ], }
  ];

})();
