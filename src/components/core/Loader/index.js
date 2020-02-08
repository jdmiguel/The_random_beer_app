import React from "react";

/* material-ui */
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

/* styles */
import "./styles.css";

const Loader = () => {
  const useStyles = makeStyles(theme => ({
    loader: {
      transformOrigin: "50%",
      color: "#f29b3b"
    }
  }));
  const classes = useStyles();

  return (
    <div className="loader-container">
      <CircularProgress
        className={classes.loader}
        color="secondary"
        size={50}
        thickness={5}
      />
    </div>
  );
};

export default Loader;
