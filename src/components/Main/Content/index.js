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
    justifyContent: "center"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(4)
  },
  blockImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  blockBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  }
}));

const Content = () => {
  const classes = useStyles();
  const { wrapper, container, blockImg, blockBtn } = classes;

  return (
    <Grid container className={wrapper}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} className={container}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} className={blockImg}>
              <img
                src="https://touch.daft.ie/static/images/fallbacks/no-image-size740x480.jpg"
                alt="not found"
              ></img>
            </Grid>
            <Grid item xs={12} sm={6}>
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
      <Grid container>
        <Grid item xs={12} className={blockBtn}>
          <Button
            onClick={() => {
              console.log("onClick button");
            }}
          >
            Show a new beer
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;
