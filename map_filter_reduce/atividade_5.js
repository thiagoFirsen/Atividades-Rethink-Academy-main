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
  if (cur.age < 30) {
    acc.numYoungPeople += 1;
    if (cur.voted) {
      acc.numYoungVotes += 1;
    }
  } else if (cur.age < 40) {
    acc.numMidsPeople += 1;
    if (cur.voted) {
      acc.numMidVotesPeople += 1;
    }
  } else if (cur.age > 40) {
    acc.numOldsPeople += 1;
    if (cur.voted) {
      acc.numOldVotesPeople += 1;
    }
  }
  return acc;
}, listOfTotalPersonsAndPeopleVoting);

console.log(voterResults);
