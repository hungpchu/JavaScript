/**
 * Module
 * 1. Storage Controller for local storage
 * 2. item controller for local data
 * 3. ui controller for anything with UI
 * 4. main app controller where all controler meets with addEventListener
 *
 * Design:
 * 1. check the section10/Module/module.js and section10/State
 * 2. State + Module patter
 */

// Storage Controler

// Item Controler -> function auto run IIFEs
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State -> kinda like ReactJS
  const data = {
    items: [
      {
        id: 0,
        name: "Steak",
        calories: 1200,
      },
      {
        id: 1,
        name: "Cookie",
        calories: 400,
      },
      {
        id: 2,
        name: "Eggs",
        calories: 300,
      },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // public
  return {
    logData: function () {
      return data;
    },
  };
})();

// UI Controler
const UICtrl = (function () {
  //   Public function
  return {};
})();

// App Controler
const App = (function (ItemCtrl, UICtrl) {
  //   Public function
  return {
    init: function () {
      console.log("init");
    },
  };
})(ItemCtrl, UICtrl);

// Init the app
App.init();
