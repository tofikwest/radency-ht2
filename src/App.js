import React from "react";
import { Table } from "./layout/table";
import { notesPattern, summaryPattern } from "./layout/tablePatterns";
import ButtonAdd from "./ui/ButtonAdd.js";

const uiAdd = <ButtonAdd key={"add-btn"}></ButtonAdd>;

const tables = [
  {
    id: "table-container",
    type: "notes",
    heading: "My Notes",
    pattern: notesPattern,
    children: [uiAdd],
  },
  {
    id: "archive-container",
    type: "archive",
    heading: "My Archive",
    pattern: notesPattern,
  },
  {
    id: "summary-container",
    type: "summary",
    heading: "My Summary",
    pattern: summaryPattern,
  },
];

function App() {
  return (
    <div>
      {tables.map((item, index) => {
        return (
          <Table
            key={index}
            id={item.id}
            heading={item.heading}
            pattern={item.pattern}
            type={item.type}
          >
            {item.children}
          </Table>
        );
      })}
    </div>
  );
}

export default App;
