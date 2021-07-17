import React, { useState } from "react";
import Menu from "./Menu";
import Nav from "./Nav";

const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const menuState = { menuActive, setMenuActive };

  console.log(menuActive);

  return (
    <div className="App">
      <Nav {...menuState} />
      <Menu {...menuState} />
    </div>
  );
};

export default App;
