//       <div parent>
//                 <div child>
//                         <h1>THIS IS H1 HTML</h1>
//                 </div>
//       </div>

//       const heading = React.createElement("h1", {}, "THIS IS REACT H1");

//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);

//       const heading = React.createElement("div", {id:"parent"}, React.createElement("div", {id:"child"}, React.createElement("h1", {}, "THIS IS REACT H1")))

//       const root = ReactDOM.createRoot(document.getElementById("root"));
//       root.render(heading);

//       <div parent>
//                 <div child>
//                         <h1>THIS IS H1 HTML</h1>
// <h2> THIS IS H2 HTML</h2>
//                 </div>
//                 <div child2>
// //                         <h1>THIS IS H1 HTML</h1>
//                         // <h2> THIS IS H2 HTML</h2>
// //                 </div>

//       </div>

import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("div", { id: "parent", key: 1 }, [
  React.createElement("div", { id: "child1", key: 2 }, [
    React.createElement("h1", {}, "THIS IS H1 OF CHILD1"),
    React.createElement("h1", {}, "THIS IS H1 OF CHILD1"),
  ]),
  React.createElement("div", { id: "child2", key: 3 }, [
    React.createElement("h1", {}, "THIS IS H1 OF CHILD2"),
    React.createElement("h1", {}, "THIS IS H1 OF CHILD2"),
  ]),
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
