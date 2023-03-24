const getPeople = async (id) => {
  const url = `https://swapi.dev/api/people/${id}`;
  const result = await fetch(url);
  const { name, hair_color, eye_color, birth_year } = await result.json();
  return {
    name,
    hair_color,
    eye_color,
    birth_year,
  };
};

const getPeople10 = async () => {
  const people = [];
  for (let i = 1; i <= 10; i++) {
    people.push(await getPeople(i));
  }
  console.log(people);
};
getPeople10();
