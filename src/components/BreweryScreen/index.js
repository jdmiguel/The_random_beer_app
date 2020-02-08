import React from "react";
import PropTypes from "prop-types";

/** Material-UI */
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

/** Core */
import Title from "../core/Title";
import Description from "../core/Description";
import Link from "../core/Link";

/** Literals */
import { breweryScreenLiterals } from "../../utils/literals";

/** Styles */
import "./styles.css";

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
  blockImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  blockTxt: {
    position: "relative"
  }
}));

const BreweryScreen = ({
  breweryName,
  breweryDescription,
  breweryLabel,
  onClickBackBtn
}) => {
  const classes = useStyles();
  const { wrapper, container, blockImg, blockTxt } = classes;

  return (
    <Grid container className={wrapper}>
      <Grid item xs={12} lg={8}>
        <div className="breweryScreen-upper-container">
          <Link onClick={onClickBackBtn}>
            {breweryScreenLiterals.backBtnTxt}
          </Link>
          <h3>{breweryScreenLiterals.breweryTitle}</h3>
        </div>
        <Paper elevation={3} className={container}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4} className={blockImg}>
              <img src={breweryLabel} alt="not found"></img>
            </Grid>
            <Grid item xs={12} lg={8} className={blockTxt}>
              <Title>{breweryName}</Title>
              <Description>{breweryDescription}</Description>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

BreweryScreen.propTypes = {
  breweryName: PropTypes.string,
  breweryDescription: PropTypes.string,
  breweryLabel: PropTypes.string,
  onClickBackBtn: PropTypes.func
};

export default BreweryScreen;
