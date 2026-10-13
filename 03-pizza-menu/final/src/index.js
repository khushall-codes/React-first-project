import React from "react";
import ReactDOM from "react-dom/client";

function App(){
  return (
    <div>
      <h1>Hello React!!!</h1>
      <pizza />
    </div>
  );
}

function pizza() {
  return (
    <div>
      <h2>Pizza Spinaci</h2>
      <p>Ingredients: Spinach, Tomatoes, Mozzarella</p>
    </div>
  )
};



// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
