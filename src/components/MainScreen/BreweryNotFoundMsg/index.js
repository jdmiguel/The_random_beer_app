import React from "react";

/** Material-UI */
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

/** Styles */
import "./styles.css";

const BreweryNotFound = () => {
  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(3)
    }
  }));
  const classes = useStyles();

  return (
    <div className="breveryNotFound-container">
      <Grid container className={classes.wrapper}>
        <Grid item xs={12}>
          <p>
            Sorry, this beer doesn't have brewery, so try to get another one
            clicking the upper button
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default BreweryNotFound;
