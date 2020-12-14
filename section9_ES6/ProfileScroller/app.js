// Create the data
const data = [
  {
    name: "Tai Nguyens",
    age: 23,
    gender: "male",
    lookingfor: "female",
    location: "Hanoi VietNam",
    image: `https://randomuser.me/api/portraits/men/${getRandomNum(1, 88)}.jpg`,
  },
  {
    name: "Jem Smith",
    age: 24,
    gender: "female",
    lookingfor: "male",
    location: "Hanoi VietNam",
    image: `https://randomuser.me/api/portraits/women/${getRandomNum(
      1,
      88
    )}.jpg`,
  },
  {
    name: "Laura Tai",
    age: 26,
    gender: "female",
    lookingfor: "male",
    location: "Hanoi VietNam",
    image: `https://randomuser.me/api/portraits/women/${getRandomNum(
      1,
      88
    )}.jpg`,
  },
];

const profiles = profileIterator(data);

// Call first profile
nextProfile();

// Next event
document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if (currentProfile) {
    document.getElementById(
      "profileDisplay"
    ).innerHTML = `<ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
            <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
        `;
    document.getElementById(
      "imageDisplay"
    ).innerHTML = `<img src=${currentProfile.image} />`;
  } else window.location.reload();
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
