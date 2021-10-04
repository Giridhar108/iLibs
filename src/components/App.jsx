import React from "react";
import Dogs from "./Dogs.jsx";
import Select from "./Select.jsx";

function App() {
  const [currentDog, setCurrentDog] = React.useState("");
  return (
    <>
      <Select currentDog={currentDog} setCurrentDog={setCurrentDog} />
      <Dogs currentDog={currentDog} />
    </>
  );
}

export default App;
