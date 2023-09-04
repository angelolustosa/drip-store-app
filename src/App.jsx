//import "./App.css";

import { useEffect } from "react";
import { TableDefault } from "./components/TableDefault";

function App() {
  //const url = 'http://localhost:5000/produtos'
  const url = 'https://jsonplaceholder.typicode.com/users/'

  return (
    <>
      <TableDefault url={url} />
    </>
  );
}

export default App;
