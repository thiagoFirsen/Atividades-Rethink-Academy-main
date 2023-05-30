const TemplateExpressions = () => {
  const name = "Matheus";
  const data = {
    age: 31,
    job: "Programmer",
  };
  return (
    <div>
      <h1>Ola {name}, tudo bem?</h1>
      <p>Voce atua como: {data.job}</p>
    </div>
  );
};

export default TemplateExpressions;
