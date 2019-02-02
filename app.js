(function() {

  "use strict";

  angular.module("CheckOffShoppingListApp", [])
         .controller("goodsToBuyController", goodsToBuyController)
         .controller("goodsAlreadyBoughtController", goodsAlreadyBoughtController)
         .service("ShoppingListCheckOffService", ShoppingListCheckOffService);


  goodsToBuyController.$inject = ["ShoppingListCheckOffService"];

  function goodsToBuyController(ShoppingListCheckOffService) {

    var list = this;

    list.items = ShoppingListCheckOffService.getItemsToBuy();

    list.checkOff = function(item_index) {

      ShoppingListCheckOffService.checkOff(item_index);
    };

  }


  goodsAlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

  function goodsAlreadyBoughtController(ShoppingListCheckOffService) {

    var list = this;

    list.items = ShoppingListCheckOffService.getItemsBought();
  }


  function ShoppingListCheckOffService() {

    var service = this;

    var items_to_buy = [ 

      { name: "Rice",      quantity: '1 Kg' }, 
      { name: "Matooke",   quantity: '2 Banches' }, 
      { name: "Kalo",      quantity: '3 Kgs' }, 
      { name: "Posho",     quantity: '4 Kgs' }, 
      { name: "Kikomando", quantity: '5 Plates' }

    ];

    var items_bought = [];

    service.getItemsToBuy = function () {

      return items_to_buy;
    };

    service.getItemsBought = function () {

      return items_bought;
    };

    service.checkOff = function (item_index) {

      items_bought.push(items_to_buy[item_index]);

      items_to_buy.splice(item_index, 1);
    };

  }

})();