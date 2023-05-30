import { useState } from "react";

function ConditionRender() {
  const [x] = useState(false);
  const [name, setName] = useState("Joao");
  return (
    <div>
      <h1>Isso sera exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {name === "Joao" ? <p>O nome é Joao</p> : <p>O nome não é Joao</p>}
      <button onClick={() => setName("Matheus")}>
        Troque o nome para Matheus
      </button>
    </div>
  );
}

export default ConditionRender;
