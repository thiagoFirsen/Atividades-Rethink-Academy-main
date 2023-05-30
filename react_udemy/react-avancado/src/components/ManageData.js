import { useState } from "react";
const ManageData = () => {
  const [number, setNumber] = useState(10);
  return (
    <div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
