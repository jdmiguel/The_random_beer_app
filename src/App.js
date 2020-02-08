import React from "react";

/** Services */
import { getRandomBeerService, getBeerService } from "./services/api";

/** Components */
import MainScreen from "./components/MainScreen";
import BreveryScreen from "./components/BreveryScreen";
import Logo from "./components/Logo";

/** Core */
import Loader from "./components/core/Loader";

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

  const getScreen = () =>
    isMain ? (
      <MainScreen
        beerName={beerName.current}
        beerDescription={beerDescription.current}
        beerLabel={beerLabel.current}
        hasBrevery={hasBrevery.current}
        onClickBtn={getRandomBeer}
        onClickLink={goBreveryDetail}
      />
    ) : (
      <BreveryScreen
        beerName={beerName.current}
        beerDescription={beerDescription.current}
        beerLabel={beerLabel.current}
      />
    );

  const getBeerById = React.useCallback(
    id => {
      getBeerService(id).then(response => {
        const { data } = response;

        beerName.current = data.name;
        beerDescription.current =
          (data.style && data.style.description) || "Description not found";
        beerLabel.current = data.labels ? data.labels.medium : DEFAULT_LABEL;
        hasBrevery.current = !!data.breweries.length;

        setIsLoading(false);
      });
    },
    [beerName, beerDescription]
  );

  const getRandomBeer = React.useCallback(() => {
    setIsLoading(true);
    getRandomBeerService().then(response => {
      const {
        data: { id }
      } = response;

      getBeerById(id);
    });
  }, [getBeerById]);

  const goBreveryDetail = () => {
    setIsMain(false);
  };

  React.useEffect(() => {
    getRandomBeer();
  }, [getRandomBeer]);

  return (
    <React.Fragment>
      <Logo />
      {isLoading ? <Loader /> : getScreen()}
    </React.Fragment>
  );
};

export default App;
