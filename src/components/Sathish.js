import React from "react";
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, Avatar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    width: 1520,
    height: 1002,
    border: "1px solid #000",
    position: "relative",
    padding: theme.spacing(2),
  },
  innerBox: {
    width: "calc(100% - 1360px)",
    height: "766px",
    borderRadius: "24px",
    border: "1px solid #000",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
  },
  sideNav: {
    width: "260px",
    height: "100%",
    border: "1px solid #000",
    padding: "80px 48px",
    position: "absolute",
    top: 0,
    left: 0,
    gap: theme.spacing(2),
  },
  contentBox: {
    width: "calc(100% - 1076px)",
    height: "766px",
    gap: theme.spacing(2),
    padding: "80px 36px",
    marginLeft: "auto",
  },
  avatar: {
    width: "144px",
    height: "144px",
    borderRadius: "95px",
    border: "1px solid #000",
  },
}));

const MyComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={2}>
          <Grid item className={classes.sideNav}>
            {/* Avatar */}
            <Avatar className={classes.avatar} />
            <Box>Home</Box>
            <Box>Home</Box>
            <Box>Home</Box>
            <Box>Home</Box>
            <Box>Home</Box>
            <Box>Home</Box>
            <Box>Works</Box>
          </Grid>
          <Grid item className={classes.contentBox}>
            <Box>Content</Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyComponent;
