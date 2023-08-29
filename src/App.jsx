import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { TableDefault } from "./components/TableDefault";

function App() {
  const [data, setData] = useState([]);

  const buscarProdutos = async () => {
    /* const response = await fetch("http://localhost:5000/produtos");
    console.log(await response.json()); */

    const response = await axios.get("http://localhost:5000/produtos");
    console.log("response", response.data);
    setData(response.data);
  };

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      {JSON.stringify(data)}
    </>
  );
}

export default App;
