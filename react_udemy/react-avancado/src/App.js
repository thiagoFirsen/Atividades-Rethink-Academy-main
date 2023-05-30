import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

function App() {
  const blueTitle = false;
  const n = 5;
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p style={{ color: "orange", padding: "25px" }}>Esse elemento é inline</p>

      <h2 style={n < 10 ? { color: "red" } : { color: "green" }}>
        CSS DINAMICO
      </h2>
      <h2 className={blueTitle ? "blue-title" : "title"}>
        CSS CLASSE DINAMICA
      </h2>
      <Title />
    </div>
  );
}

export default App;
