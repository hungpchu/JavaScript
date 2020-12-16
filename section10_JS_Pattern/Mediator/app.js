/**
 * Mediator
 * 1. interface for communicating with other other mediated objects
 * 2. Example: chat room
 */

//  User is the colleagues of the chat room
const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  //  send message to other
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

//  Chatroom is the mediator
const Chatroom = function () {
  let users = {}; // list of users
  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    //  Method using inside the user
    send: function (message, from, to) {
      //  send to a single user or
      // broadcast to the entire room
      if (to) to.receive(message, from);
      // Single user message
      else {
        for (key in users) {
          // the entire room receive but the sender
          if (users[key] !== from) users[key].receive(message, from);
        }
      }
    },
  };
};

const Hung = new User("Hung"),
  Han = new User("Han"),
  Bear = new User("Bear");

const chatroom = new Chatroom();

chatroom.register(Hung);
chatroom.register(Han);
chatroom.register(Bear);

Hung.send("Hello Han", Han);
Han.send("Hello Bear, u are the best dev ever", Bear);
Bear.send("Hello the whole room");
