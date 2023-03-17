const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

const displayUser = (user) => {
  return user.name + " " + user.surname + " (" + user.age + ")";
};

console.log(displayUser(userObject));
