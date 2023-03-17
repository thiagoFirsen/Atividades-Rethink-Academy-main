let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

const createNewLanguage = (newLanguage) => {
  programming.languages.push(newLanguage);
  console.log(programming);
};

createNewLanguage("Java");
