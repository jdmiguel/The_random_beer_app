import React from "react";

/** Services */
import {
  getRandomBeerService,
  getBeerByIdService,
  getBreweryByIdService
} from "./services/api";

/** Components */
import MainScreen from "./components/MainScreen";
import BreweryScreen from "./components/BreweryScreen";
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
  const hasBrewery = React.useRef(null);
  const breweryId = React.useRef(null);
  const breweryName = React.useRef(null);
  const breweryDescription = React.useRef(null);
  const breweryLabel = React.useRef(null);
  const breweryYear = React.useRef(null);

  const getScreen = () =>
    isMain ? (
      <MainScreen
        beerName={beerName.current}
        beerDescription={beerDescription.current}
        beerLabel={beerLabel.current}
        hasBrewery={hasBrewery.current}
        breweryName={breweryName.current}
        onClickRandomBtn={getRandomBeer}
        onClickGoBreweryBtn={goBreweryScreen}
      />
    ) : (
      <BreweryScreen
        breweryName={breweryName.current}
        breweryDescription={breweryDescription.current}
        breweryLabel={breweryLabel.current}
        breweryYear={breweryYear.current}
        onClickBackBtn={goMainScreen}
      />
    );

  const getBeerById = React.useCallback(
    id => {
      getBeerByIdService(id).then(response => {
        const { data } = response;

        beerName.current = data.name;
        beerDescription.current =
          (data.style && data.style.description) || "Description not found";
        beerLabel.current = data.labels ? data.labels.medium : DEFAULT_LABEL;
        hasBrewery.current = !!data.breweries.length;
        breweryId.current = data.breweries.length ? data.breweries[0].id : null;

        const [breweryData] = data.breweries;
        breweryId.current = breweryData.id;
        breweryName.current = breweryData.name;
        breweryYear.current = breweryData.established;

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

  const goBreweryScreen = () => {
    setIsLoading(true);
    if (breweryId.current) {
      getBreweryByIdService(breweryId.current).then(response => {
        const { data } = response;

        breweryDescription.current =
          data.description || "Description not found";
        breweryLabel.current =
          data.images && data.images.squareMedium
            ? data.images.squareMedium
            : DEFAULT_LABEL;

        setIsMain(false);
        setIsLoading(false);
      });
    }
  };

  const goMainScreen = () => {
    setIsMain(true);
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
