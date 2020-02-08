import React from "react";

/** Services */
import { getRandomBeer } from "./services/api";

/** Components */
import Main from "./components/Main";

const App = () => {
  React.useEffect(() => {
    getRandomBeer().then(response => console.log("response: ", response));
  }, []);

  return <Main />;
};

export default App;
