import React from "react";
import "./App.css";
// import { Entry } from "./components/Entry";

const files = {
  children: [
    {
      name: "Node Modules",
      children: [{ name: "Joi" }],
    },
    {
      name: "Package.json",
    },
    {
      name: "Vit_config_json",
    },
    {
      name: "@babel",
      children: [
        {
          name: "code-frame",
          children: [
            { name: "licensee" },
            { name: "package.json" },
            { name: "readme.md" },
          ],
        },
        { name: "compat-data" },
        { name: "core" },
        { name: "eslint-parser" },
      ],
    },
  ],
};

export type TEntry = {
  name: string;
  children: TEntry[] | undefined;
  depth: number;
};

const App = () => {
  return (
    <div className="App">
      hey
      {/*{files.children.map((entry: TEntry) => {*/}
      {/*  return <Entry name={entry.name} children={entry.children} depth={1} />;*/}
      {/*})}*/}
    </div>
  );
};

export { App };
