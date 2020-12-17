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
      //   {
      //     id: 0,
      //     name: "Steak",
      //     calories: 1200,
      //   },
      //   {
      //     id: 1,
      //     name: "Cookie",
      //     calories: 400,
      //   },
      //   {
      //     id: 2,
      //     name: "Eggs",
      //     calories: 300,
      //   },
    ],
    currentItem: null,
    totalCalories: 0,
  };
  // public
  return {
    getItem: function () {
      return data.items;
    },
    getTotalCalories: function () {
      let total = 0;
      // loop through items and add cals
      data.items.forEach((item) => (total += item.calories));
      // Set the total calories
      data.totalCalories = total;
      return data.totalCalories;
    },
    addItem: function (name, calories) {
      // Create ID
      let ID =
        data.items.length > 0 ? data.items[data.items.length - 1].id + 1 : 0;
      // Calories to number
      calories = parseInt(calories);
      const newItem = new Item(ID, name, calories);
      data.items.push(newItem);
      return newItem;
    },
    getItemById: function (id) {
      let found = null;
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function (name, calories) {
      // Calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    logData: function () {
      return data;
    },
  };
})();

// UI Controler
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    listItems: "#item-list li",
    addBtn: ".add-btn",
    updateBtn: ".update-btn",
    deleteBtn: ".delete-btn",
    backBtn: ".back-btn",
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
    totalCalories: ".total-calories",
  };
  //   Public function
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach((item) => {
        html += ` 
        <li class="collection-item" id="${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
      });
      // Insert list item
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getSelectors: function () {
      return UISelectors;
    },
    addListItem: function (item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = "block";
      // Create li element
      const li = document.createElement("li");
      li.className = "collection-item";
      li.id = `item-${item.id}`;
      li.innerHTML = ` <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;

      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement("beforeend", li);
    },
    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Convert NodeList to Array
      listItems = Array.from(listItems);

      listItems.forEach((listItem) => {
        const itemID = listItem.getAttribute("id");
        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = ` <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="edit-item fa fa-pencil"></i>
      </a>`;
        }
      });
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
    clearInput: function () {
      document.querySelector(UISelectors.itemNameInput).value = "";
      document.querySelector(UISelectors.itemCaloriesInput).value = "";
    },
    addItemToForm: function () {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = "none";
    },
    showTotalCalories: function (totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    clearEditState: function () {
      // clear input
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = "none";
      document.querySelector(UISelectors.deleteBtn).style.display = "none";
      document.querySelector(UISelectors.backBtn).style.display = "none";
      document.querySelector(UISelectors.addBtn).style.display = "inline";
    },
    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = "inline";
      document.querySelector(UISelectors.deleteBtn).style.display = "inline";
      document.querySelector(UISelectors.backBtn).style.display = "inline";
      document.querySelector(UISelectors.addBtn).style.display = "none";
    },
  };
})();

// App Controler
const App = (function (ItemCtrl, UICtrl) {
  // Load Event listeners
  const loadEventListeners = function () {
    // get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);

    // disable submit on enter
    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) e.preventDefault();
    });

    // Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener("click", itemEditClick);

    // Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener("click", itemUpdateSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // get form input from UI Controller
    const input = UICtrl.getItemInput();
    // Check for name and calories input
    if (input.name !== "" && input.calories !== "") {
      //  Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      UICtrl.addListItem(newItem);
      // get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);
      // Clear the fields
      UICtrl.clearInput();
    }
    e.preventDefault();
  };

  // Update item submit
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      // Get the list item id
      const listId = e.target.parentNode.parentNode.id;
      // break into an array
      const listIdArray = listId.split("-");
      // get the actual id
      const id = parseInt(listIdArray[1]);
      // get the item
      const itemToEdit = ItemCtrl.getItemById(id);
      // Set the current item
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add item to Form
      UICtrl.addItemToForm();
    }

    e.preventDefault();
  };

  // Update item submit
  const itemUpdateSubmit = function (e) {
    // Get item input
    const input = UICtrl.getItemInput();
    // Update Item
    const updateItem = ItemCtrl.updateItem(input.name, input.calories);
    // Update UI
    UICtrl.updateListItem(updateItem);

    // get the total calories
    const totalCalories = ItemCtrl.getTotalCalories();
    // Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();
    e.preventDefault();
  };

  //   Public function
  return {
    init: function () {
      // Clear the Edit state/ set initial state
      UICtrl.clearEditState();
      // Fetch Items from ItemCtrl
      const items = ItemCtrl.getItem();
      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate lists with items
        UICtrl.populateItemList(items);
      }

      // get the total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

// Init the app
App.init();
