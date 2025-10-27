import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement("tagname", {attributes in object}, children);

const heading1 = React.createElement("h1", { id: "heading1", key: 1 }, "Hello World"); // js react object
const heading2 = React.createElement("h2", { id: "heading2", key: 2 }, "Shaik Shameer"); // js react object

const parent = React.createElement("div", { id: "parent" }, [heading1, heading2]);

// ReactDOM.createRoot(element);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); this will convert the js react object to html tags and replaces the new html content inside the root.
root.render(parent);
