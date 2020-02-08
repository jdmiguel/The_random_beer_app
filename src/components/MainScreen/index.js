import React from "react";
import PropTypes from "prop-types";

/** Material-UI */
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

/** Components */
import BreweryNotFoundMsg from "./BreweryNotFoundMsg";

/** Core */
import Title from "../core/Title";
import Description from "../core/Description";
import Link from "../core/Link";
import Button from "../core/Button";

/** Literals */
import { mainScreenLiterals } from "../../utils/literals";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(3)
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },
  blockBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(5)
  },
  blockImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  blockTxt: {
    position: "relative"
  }
}));

const MainScreen = ({
  beerName,
  beerDescription,
  beerLabel,
  hasBrewery,
  onClickRandomBtn,
  onClickGoBreweryBtn
}) => {
  const classes = useStyles();
  const { wrapper, container, blockImg, blockBtn, blockTxt } = classes;

  return (
    <div className="mainScreen-container">
      <Grid container className={wrapper}>
        <Grid item xs={12} className={blockBtn}>
          <Button onClick={onClickRandomBtn}>
            {mainScreenLiterals.randomBtnTxt}
          </Button>
        </Grid>
        {hasBrewery ? (
          <Grid item xs={12} lg={8}>
            <Paper elevation={3} className={container}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} className={blockImg}>
                  <img src={beerLabel} alt="not found"></img>
                </Grid>
                <Grid item xs={12} lg={8} className={blockTxt}>
                  <Title>{beerName}</Title>
                  <Description>{beerDescription}</Description>
                  <Link onClick={onClickGoBreweryBtn}>
                    {mainScreenLiterals.goBreweryBtnTxt}
                  </Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ) : (
          <BreweryNotFoundMsg />
        )}
      </Grid>
    </div>
  );
};

MainScreen.propTypes = {
  beerName: PropTypes.string,
  beerDescription: PropTypes.string,
  beerLabel: PropTypes.string,
  hasBrewery: PropTypes.bool,
  onClickRandomBtn: PropTypes.func,
  onClickGoBreweryBtn: PropTypes.func
};

export default MainScreen;
