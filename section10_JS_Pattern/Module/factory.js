/**
 * Factory
 * 1. create multiple objects
 * 2. create an interface for creating objects
 * 3. let subclass define which class to init
 * 4. used in applications to manage, maintain and manipulate collections of different objects
 */
function MemberFactory() {
  this.createMember = function (name, type) {
    let member;
    if (type === "simple") member = new SimpleMembership(name);
    else if (type === "standard") member = new StandardMembership(name);
    else if (type === "super") member = new SuperMembership(name);

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): (${this.cost})`);
    };

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};
const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Hung", "super"));
members.push(factory.createMember("Han", "simple"));
members.push(factory.createMember("Bear", "standard"));

console.log(members);

members.forEach((member) => {
  member.define();
});
