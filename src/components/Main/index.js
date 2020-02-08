import React from "react";
import PropTypes from "prop-types";

/** Components */
import Header from "./Header";
import Content from "./Content";

/** Core */
import Loader from "../core/Loader";

const Main = ({
  isLoading,
  beerName,
  beerDescription,
  beerLabel,
  hasBrevery,
  onClickBtn,
  onClickLink
}) => (
  <React.Fragment>
    <Header />
    {isLoading ? (
      <Loader />
    ) : (
      <Content
        beerName={beerName}
        beerDescription={beerDescription}
        beerLabel={beerLabel}
        hasBrevery={hasBrevery}
        onClickBtn={onClickBtn}
        onClickLink={onClickLink}
        className="content"
      />
    )}
  </React.Fragment>
);

Main.propTypes = {
  beerName: PropTypes.string,
  beerDescription: PropTypes.string,
  beerLabel: PropTypes.string,
  hasBrevery: PropTypes.bool,
  onClickBtn: PropTypes.func,
  onClickLink: PropTypes.func
};

export default Main;
