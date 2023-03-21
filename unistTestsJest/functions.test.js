import {
  doubleANumber,
  createFullName,
  calculateTheLenghtOfAString2,
  numbersArrayIntoString,
  addNewLanguage,
  votersResult,
} from "./functions";

//Funçaão 1
describe("Teste para função de multiplacação por 2", () => {
  it("Multiplicando 1 por 2", () => {
    expect(doubleANumber(1)).toBe(2);
  });
  it("Multiplicando 2 por 2", () => {
    expect(doubleANumber(2)).toBeGreaterThan(2);
  });
  it("Multiplicando 1 por 2 - Erro esperado - Igual a 4", () => {
    expect(doubleANumber(1)).toEqual(4);
  });
  it("Multiplicando 4 por 2 - Erro esperado - Menor que 4", () => {
    expect(doubleANumber(4)).toBeLessThan(4);
  });
});
//Funçaão 2
describe("Teste para função de criar um nome", () => {
  it("Criando um nome completo passando nome e sobrenome - Igual", () => {
    expect(createFullName("Thiago", "Firsen")).toMatch("Thiago Firsen");
  });
  it("Criando um nome completo passando nome e sobrenome - Que contenha", () => {
    expect(createFullName("Thiago", "Firsen")).toContain("Thiago", "Firsen");
  });
  it("Criando um nome completo passando nome e sobrenome -Erro esperado - Que nao seja Thiago Firsen", () => {
    expect(createFullName("Thiago", "Firsen")).not.toMatch("Thiago Firsen");
  });
  it("Criando um nome completo passando nome e sobrenome -Erro esperado - Que nao tenha Thiago Firsen", () => {
    expect(createFullName("Thiago", "Firsen")).not.toContain("Thiago Firsen");
  });
});
//Funçaão 3
describe("Teste para função que calcula tamanho da palavra", () => {
  it("Calculando o tamanho da palavra 'Teste' ", () => {
    expect(calculateTheLenghtOfAString2("Teste")).toBe(5);
  });
  it("Calculando o tamanho da palavra 'Rethink' ", () => {
    expect(calculateTheLenghtOfAString2("Rethink")).toEqual(7);
  });
  it("Calculando o tamanho da palavra 'Teste' - Erro esperado - Nao é 5", () => {
    expect(calculateTheLenghtOfAString2("Teste")).not.toBe(5);
  });
  it("Calculando o tamanho da palavra 'Rethink' - Erro esperado - Nao é igual a 7 ", () => {
    expect(calculateTheLenghtOfAString2("Rethink")).not.toEqual(7);
  });
});
//Função 4
describe("Teste para função que adiciona um '.' a cada 3 números", () => {
  it("Passando um array de 8 numeros", () => {
    expect(numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8])).toBe("123.456.78");
  });
  it("Passando um array de 12 numeros", () => {
    expect(
      numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    ).toEqual("123.456.789.101112");
  });
  it("Passando um array de 8 numeros - Erro esperado - Não é", () => {
    expect(numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8])).not.toBe(
      "123.456.78"
    );
  });
  it("Passando um array de 12 numeros - Erro esperado - Não é igual", () => {
    expect(
      numbersArrayIntoString([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    ).not.toEqual("123.456.789.101112");
  });
});
//Funçao 5
describe("Teste para função que adiciona uma linguagem de programaçao dentro de um array que esta dentro de um objeto", () => {
  it("Passando um objeto e adicionando a linguagem Swift", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    expect(addNewLanguage(programming, "Swift")).toHaveProperty("languages", [
      "JavaScript",
      "Python",
      "Ruby",
      "Swift",
    ]);
  });
  it("Passando um objeto e adicionando a linguagem PHP", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    expect(addNewLanguage(programming, "PHP")).toMatchObject({
      languages: ["JavaScript", "Python", "Ruby", "PHP"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    });
  });
  it("Passando um objeto e adicionando a linguagem Swift - Erro Esperado - Não tem a propiedade 'languages'", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    expect(addNewLanguage(programming, "Swift")).not.toHaveProperty(
      "languages",
      ["JavaScript", "Python", "Ruby", "Swift"]
    );
  });
  it("Passando um objeto e adicionando a linguagem PHP - Erro Esperado - Nao combina", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    expect(addNewLanguage(programming, "PHP")).not.toMatchObject({
      languages: ["JavaScript", "Python", "Ruby", "PHP"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    });
  });
  it("Testando se languages tem tamanho original + 1", () => {
    const programming = {
      languages: ["JavaScript", "Python", "Ruby"],
      isChallenging: true,
      isRewarding: true,
      difficulty: 8,
      jokes:
        "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
    };
    expect(addNewLanguage(programming).languages).toHaveLength(4);
  });
});
//Funçao 6
describe("Teste para função de contagem de eleitores votantes e nao votantes", () => {
  it("Passando objeto e contando para ver se 'numYoungVotes' = 1", () => {
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
    expect(votersResult(voters)).toHaveProperty("numYoungVotes", 1);
  });
  it("Passando objeto e contando para ver se receberei objeto esperado de volta", () => {
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
    expect(votersResult(voters)).toMatchObject({
      numYoungVotes: 1, // número de eleitores jovens que votaram
      numYoungPeople: 4, // número de eleitores jovens
      numMidVotesPeople: 3, // número de eleitores maduros que votaram
      numMidsPeople: 4, // número de eleitores maduros
      numOldVotesPeople: 3, // número de eleitores sêniores que votaram
      numOldsPeople: 4, // número de eleitores sêniores
    });
  });
  it("Passando objeto e contando para ver se 'numYoungVotes' = 1 - Erro Esperado - Não é igual", () => {
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
    expect(votersResult(voters)).not.toHaveProperty("numYoungVotes", 1);
  });
  it("Passando objeto e contando para ver se receberei objeto esperado de volta - Erro Esperado - Não é igual", () => {
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
    expect(votersResult(voters)).not.toMatchObject({
      numYoungVotes: 1, // número de eleitores jovens que votaram
      numYoungPeople: 4, // número de eleitores jovens
      numMidVotesPeople: 3, // número de eleitores maduros que votaram
      numMidsPeople: 4, // número de eleitores maduros
      numOldVotesPeople: 3, // número de eleitores sêniores que votaram
      numOldsPeople: 4, // número de eleitores sêniores
    });
  });
});
