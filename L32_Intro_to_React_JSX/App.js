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
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "div",
//   { id: "main-div", key: 1 },
//   React.createElement(
//     "div",
//     { id: "child-div", key: 2 },
//     [React.createElement(
//       "h1",
//       { id: "heading1" },
//       "THIS IS MY HEADING 1 REACT ELEMENT"
//     ),
//   React.createElement(
//       "h2",
//       { id: "heading2" },
//       "THIS IS MY HEADING 2 REACT ELEMENT"
//     )]
//   )
// );

//JSX = > JavaScript Syntax -> WE CAN ADD JS INSIDE JSX . IT IS LOOK LIKE OF HTML OR XML
{
  /* <div class="this">THIS IS MY DIV</div>
<div className="this is ">THIS IS MY DIV</div> */
}

{
  /* <div cl></div>*/
}

//REACT ELEMENT
// const normalHeading = React.createElement("div", {id:"normal-heading"}, "THIS IS MY HEADING");

// console.log(normalHeading);
const anotherHeading = <div id="jsx-heading2"> THIS IS MY another heading</div>;

// JSX ELEMENT
const jsxHeading = <div id="jsx-heading">
  THIS IS MY JSX
  {anotherHeading}
  </div>;



// console.log(jsxHeading);

// FIRST - CLASS BASED COMPONENTS
// SECOND - FUNCTIONAL BASED COMPONENTS


const Component1 = () =>{
  return <div>
    THIS IS COMPONENT 1
  </div>
}

const Component2 = () => {
  return  (
  <div>
    THIS IS COMPONENT2
    <h1>THIS ANOTHER LINE</h1>
  </div>
)}

// React COMPONENT
const HeaderComponent = () => {
  return (
    <div>
      <h1>THIS IS MY HEADER COMPONENT</h1>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

// console.log(HeaderComponent);

// const MainComponent = () => {
//   return (
//     <div>
//       <h1>THIS IS FOOTER</h1>
//       <HeaderComponent />
//       {jsxHeading}
//       <FooterComponent/>
//     </div>
//   );
// };

const MainComponent = () => {
  return (
    <div>
      <Component1/>
      <Component2/>
    </div>
  );
};

const FooterComponent = () =>{
  return (
    <div>
      <h1>THIS IS MY FOOTER COMPONENT</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
