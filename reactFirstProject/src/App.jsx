import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-white p-4 rounded-xl">Hello world!</h1>
     <Card name = "Tariq" profession="Software Engineer" companyName="XYZ"></Card>
     <Card name = "Zaid" profession="Mechanical Engineer" companyName="KLM"></Card>
     <Card name = "Masoo" profession="Electronics Engineer" companyName="ABZ"></Card>
    </>
  );
}

export default App;
