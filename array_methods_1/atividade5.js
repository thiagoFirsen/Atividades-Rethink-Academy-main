const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];
const arrayOfObjects = (object) => {
  const agesArray = object.map((people) => people.age);
  return [
    Math.min(...agesArray),
    Math.max(...agesArray),
    Math.max(...agesArray) - Math.min(...agesArray),
  ];
};
console.log(arrayOfObjects(input));
