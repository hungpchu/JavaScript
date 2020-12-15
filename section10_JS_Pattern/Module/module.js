// Module pattern
// IFFES - check function.js in section1 folder
(function () {
  // 1. Declare private vars and functions

  return {
    // 2.Declare public variables and functions
  };
})();

/**
 * STANDARD MODULE PATTERN
 * 1. return our own public function
 *  */
const UICtrl = (function () {
  // private variables
  let text = "Hello World";
  const changeText = () => {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    // public function access private changeText and text
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();

/**
 * REVEALING MODULE PATTERN
 * 1. map object literal to private function that you want to reveal
 * 2. can reveal certain methods from your module
 **/

const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("item Added");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Hung" });

console.log(ItemCtrl.get(1));
