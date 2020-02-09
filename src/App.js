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

  /**
   * Function to get the regarding screen component depending on isMain state
   * @function getScreen
   * @returns {JSX component}
   */

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

  /**
   * Function covered by useCallback method to call a service
   * with an specific Id which retrieves a beer data used to set
   * beer and brewery data as references
   * Besides, it sets isLoading state as false
   * @function getBeerById
   * @param {id} string
   */

  const getBeerById = React.useCallback(
    id => {
      getBeerByIdService(id).then(response => {
        const { data } = response;

        beerName.current = data.name;

        /** I have realized some times description is not retrieved by service, so first
        I check realized if it exists. If exits I assing to the reference this value ,
        if not I assign to the reference a string value  */
        beerDescription.current =
          (data.style && data.style.description) || "Description not found";

        /** I check if label is retrieved by service, If exits I assing to the reference this value,
        if not I assign to the reference a CONSTANT value with a src default image*/

        beerLabel.current = data.labels ? data.labels.medium : DEFAULT_LABEL;

        /** I check if breweries data retrieved exits to assign a boolean reference*/

        hasBrewery.current = !!data.breweries.length;
        /** I check if breweries data retrieved exits to assign an string or a null value as id*/

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

  /**
   * Function to call a service which retrieves a beer data used to set
   * brewery data as references
   * Besides, it sets isLoading and isMain state as false
   * @function goBreweryScreen
   */

  const goBreweryScreen = () => {
    setIsLoading(true);
    if (breweryId.current) {
      getBreweryByIdService(breweryId.current).then(response => {
        const { data } = response;

        /** I have realized some times description is not retrieved by service, so first
        I check realized if it exists. If exits I assing to the reference this value ,
        if not I assign to the reference a string value  */
        breweryDescription.current =
          data.description || "Description not found";

        /** I check if label is retrieved by service, If exits I assing to the reference this value,
        if not I assign to the reference a CONSTANT value with a src default image*/

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

  /**
   * Function covered by useCallback method to call a service
   * which retrieves a random beer data used to call getBeerById
   * function with the id retrieved
   * @function getRandomBeer
   */

  const getRandomBeer = React.useCallback(() => {
    setIsLoading(true);
    getRandomBeerService().then(response => {
      const {
        data: { id }
      } = response;

      getBeerById(id);
    });
  }, [getBeerById]);

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
