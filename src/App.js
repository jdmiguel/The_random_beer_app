import React from "react";

/** Services */
import { getRandomBeer } from "./services/api";

/** Components */
import Main from "./components/Main";

const App = () => {
  // States
  const [isMain, setIsMain] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  // Refs
  const beerName = React.useRef(null);
  const beerDescription = React.useRef(null);

  const getRandomBeerHandler = React.useCallback(() => {
    setIsLoading(true);
    getRandomBeer().then(response => {
      const { data } = response;

      beerName.current = data.name;
      beerDescription.current =
        (data.style && data.style.description) || "Description not found";
      setIsLoading(false);
    });
  }, [beerName, beerDescription]);

  React.useEffect(() => {
    getRandomBeerHandler();
  }, [getRandomBeerHandler]);

  return (
    <Main
      isLoading={isLoading}
      beerName={beerName.current}
      beerDescription={beerDescription.current}
      onClickBtn={getRandomBeerHandler}
    />
  );
};

export default App;
