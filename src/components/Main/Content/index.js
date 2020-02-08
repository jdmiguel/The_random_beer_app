import React from "react";
import PropTypes from "prop-types";

/** Material-UI */
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

/** Components */
import BreveryNotFound from "../BreveryNotFound";

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
  },
  blockTxt: {
    position: "relative"
  }
}));

const Content = ({
  beerName,
  beerDescription,
  beerLabel,
  hasBrevery,
  onClickBtn,
  onClickLink
}) => {
  const classes = useStyles();
  const { wrapper, container, blockImg, blockBtn, blockTxt } = classes;

  return (
    <div className="main-content">
      <Grid container className={wrapper}>
        <Grid item xs={12} className={blockBtn}>
          <Button onClick={onClickBtn}>Show a new beer</Button>
        </Grid>
        {hasBrevery ? (
          <Grid item xs={12} lg={8}>
            <Paper elevation={3} className={container}>
              <Grid container spacing={4}>
                <Grid item xs={12} lg={4} className={blockImg}>
                  <img src={beerLabel} alt="not found"></img>
                </Grid>
                <Grid item xs={12} lg={8} className={blockTxt}>
                  <Title>{beerName}</Title>
                  <Description>{beerDescription}</Description>
                  <Link onClick={onClickLink}>Show Brevery details</Link>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ) : (
          <BreveryNotFound />
        )}
      </Grid>
    </div>
  );
};

Content.propTypes = {
  beerName: PropTypes.string,
  beerDescription: PropTypes.string,
  beerLabel: PropTypes.string,
  onClickBtn: PropTypes.func,
  onClickLink: PropTypes.func
};

export default Content;
