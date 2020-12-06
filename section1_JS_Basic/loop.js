//  For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}
let i = 0;
// while loop
while (i < 10) {
  console.log(i);
  i++;
}

// do while loop will run once no matter the condition
i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

const cars = ["Ford", "Toyota", "Honda"];
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Karen" },
];
// forEach take 1 call back function
cars.forEach(function (car, index) {
  console.log(`${index}: ${car}`);
});
// map
cars.map((car) => console.log(car));

//  for in loop
for (let index in users) {
  console.log(users[index]);
}

const ids = users.map(function (user) {
  return user.id;
});

console.log(ids);
