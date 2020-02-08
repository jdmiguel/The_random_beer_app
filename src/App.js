import React from "react";

/** Services */
import { getRandomBeer, getBeer } from "./services/api";

/** Components */
import Main from "./components/Main";
import BreveryDetail from "./components/BreveryDetail";

/** Constants */
import { DEFAULT_LABEL } from "./utils/constants";

const App = () => {
  // States
  const [isMain, setIsMain] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);

  // Refs
  const beerName = React.useRef(null);
  const beerDescription = React.useRef(null);
  const beerLabel = React.useRef(null);
  const hasBrevery = React.useRef(null);

  const getRandomBeerHandler = React.useCallback(() => {
    setIsLoading(true);
    getRandomBeer().then(response => {
      const { data } = response;

      beerName.current = data.name;
      beerDescription.current =
        (data.style && data.style.description) || "Description not found";
      beerLabel.current = data.labels ? data.labels.medium : DEFAULT_LABEL;
      hasBrevery.current = !!data.breweries.length;

      setIsLoading(false);
    });

    /*
    getBeer("c4f2KE").then(response => {
      const { data } = response;

      beerName.current = data.name;
      beerDescription.current =
        (data.style && data.style.description) || "Description not found";
      beerLabel.current = data.labels ? data.labels.medium : DEFAULT_LABEL;

      setIsLoading(false);
    });
    */
  }, [beerName, beerDescription]);

  const goBreveryDetail = React.useCallback(() => {
    setIsLoading(true);
  }, []);

  React.useEffect(() => {
    getRandomBeerHandler();
  }, [getRandomBeerHandler]);

  return isMain ? (
    <Main
      isLoading={isLoading}
      beerName={beerName.current}
      beerDescription={beerDescription.current}
      beerLabel={beerLabel.current}
      hasBrevery={hasBrevery.current}
      onClickBtn={getRandomBeerHandler}
      onClickLink={goBreveryDetail}
    />
  ) : (
    <BreveryDetail
      isLoading={isLoading}
      beerName={beerName.current}
      beerDescription={beerDescription.current}
      beerLabel={beerLabel.current}
      onClickBtn={getRandomBeerHandler}
    />
  );
};

export default App;
