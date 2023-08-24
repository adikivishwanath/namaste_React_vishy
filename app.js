const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "This the heading 1 for the child1"),
      React.createElement("h2", {}, "This is the headong 2 for child1"),
      React.createElement("h3", {}, "This is the h3 for child 1"),
    ]),
  ],
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This the heading 1 for the child2"),
    React.createElement("h2", {}, "This is the headong 2 for child2"),
  ])
);

// console.log(heading.props.children);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

console.log(rootElement);

rootElement.render(parent);
