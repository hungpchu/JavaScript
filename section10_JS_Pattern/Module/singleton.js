/**
 * Singleton
 * 1. manifestration of the module pattern
 * 2. immediate anonymous function
 * 3. it can only return once instance of an object at a time
 * 4. For example:
 *  Our app only wants 1 user object created at a time (logged-in user)
 */
const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Hung Chu" });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();

const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
