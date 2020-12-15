/**
 * Observer
 * 1. allow us to subsribe or unsubsribe to certain event/functionality
 * 2. subscription model
 * 3. allows to notify the dom of certain elements to be updated
 * 4. For example: AngularJS through event management within the scope
 */

//  Constructor function
class EventObserver {
  constructor() {
    this.observers = [];
  }

  // take in function as parameter
  subscribe(fn) {
    this.observers.push(fn);
    console.log(`you are now subsribed to ${fn.name}`);
  }

  unSubsribe(fn) {
    /**
     * Filter out from the list whatever matches the callback
     * function. If there is no match, the callback gets to stay
     * on the list. The filters returns a new list and reassigns the
     * list of observers
     *  */
    this.observers = this.observers.filter((item) => {
      if (item !== fn) return item;
    });
    console.log(`you are now unsubsribed from ${fn.name}`);
  }
  fire() {
    this.observers.forEach((item) => item.call());
  }
}

const click = new EventObserver();

// Event listener
document
  .querySelector(".sub-ms")
  .addEventListener("click", () => click.subscribe(getCurMilliseconds));

document
  .querySelector(".unsub-ms")
  .addEventListener("click", () => click.unSubsribe(getCurMilliseconds));

document
  .querySelector(".sub-s")
  .addEventListener("click", () => click.subscribe(getCurSeconds));

document
  .querySelector(".unsub-s")
  .addEventListener("click", () => click.unSubsribe(getCurSeconds));

document.querySelector(".fire").addEventListener("click", () => click.fire());

// Click Handler
const getCurMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

// Click Handler
const getCurSeconds = function () {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};
