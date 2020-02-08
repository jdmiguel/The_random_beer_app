import React from "react";

/** Components */
import Header from "./Header";
import Content from "./Content";

/** Core */
import Loader from "../core/Loader";

const Main = ({ isLoading, beerName, beerDescription, onClickBtn }) => {
  return (
    <React.Fragment>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Content
          beerName={beerName}
          beerDescription={beerDescription}
          onClickBtn={onClickBtn}
          className="content"
        />
      )}
    </React.Fragment>
  );
};

export default Main;
