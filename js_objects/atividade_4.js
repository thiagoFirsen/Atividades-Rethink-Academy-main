let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const addNewKey = (newKey, value) => {
  programming[newKey] = value;
  console.log(programming);
};
addNewKey("isFun", true);
