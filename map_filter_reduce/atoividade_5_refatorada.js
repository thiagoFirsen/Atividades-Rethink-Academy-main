const voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

let listOfTotalPersonsAndPeopleVoting = {
  numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidsPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0,
};
const voterResults = voters.reduce((acc, cur) => {
  acc.numYoungPeople = voters.filter((element) => element.age < 30);
  acc.numYoungVotes = acc.numYoungPeople.filter(
    (element) => element.voted
  ).length;
  acc.numYoungPeople = acc.numYoungPeople.length;
  acc.numMidsPeople = voters.filter(
    (element) => element.age >= 30 && element.age < 40
  );
  acc.numMidVotesPeople = acc.numMidsPeople.filter(
    (element) => element.voted
  ).length;
  acc.numMidsPeople = acc.numMidsPeople.length;
  acc.numOldsPeople = voters.filter((element) => element.age >= 40);
  acc.numOldVotesPeople = acc.numOldsPeople.filter(
    (element) => element.voted
  ).length;
  acc.numOldsPeople = acc.numOldsPeople.length;
  return acc;
}, listOfTotalPersonsAndPeopleVoting);
console.log(voterResults);
