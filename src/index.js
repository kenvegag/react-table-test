import React from "react";
import ReactDOM from "react-dom";
import TableComponent from "./table";
import "./styles.css";
import "./react-table.css";

function App() {
  return (
    <div className="App">
      <TableComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
