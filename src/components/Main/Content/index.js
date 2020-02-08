import React from "react";

/** Material-UI */
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

/** Core */
import Title from "../../core/Title";
import Description from "../../core/Description";
import Link from "../../core/Link";
import Button from "../../core/Button";

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
  }
}));

const Content = () => {
  const classes = useStyles();
  const { wrapper, container, blockImg, blockBtn } = classes;

  return (
    <Grid container className={wrapper}>
      <Grid item xs={12} className={blockBtn}>
        <Button
          onClick={() => {
            console.log("onClick button");
          }}
        >
          Show a new beer
        </Button>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Paper elevation={3} className={container}>
          <Grid container spacing={4}>
            <Grid item xs={12} lg={6} className={blockImg}>
              <img
                src="https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg"
                alt="not found"
              ></img>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Title />
              <Description />
              <Link
                onClick={() => {
                  console.log("onClick link");
                }}
              >
                Show Brevery details
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Content;
