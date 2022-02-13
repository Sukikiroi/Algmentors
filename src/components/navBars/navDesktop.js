import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";

const NavDesktop = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.navleft}>
        <img src="https://cdn.mentorcruise.com/img/cruise_black_small.png" />
      </div>
      <div className={classes.navright}>
        <Button variant="text">Find a Mentor</Button>
        <Button variant="text">For a Bussiness</Button>
        <Button variant="text">Book a Session</Button>
        <Button
          style={{ backgroundColor: "#d5fbf4", color: "#318273 !important" }}
          variant="contained"
        >
          Get Started
        </Button>
        <Button variant="outlined">Login</Button>
      </div>
    </div>
  );
};

export default NavDesktop;

const useStyles = makeStyles({
  container: {
    background:
      "linear-gradient(144.88deg, rgba(255, 255, 255, 0.3) -3.98%, rgba(75, 173, 239, 0.2) 21.27%, rgba(0, 183, 155, 0.6) 71.28%)",
    color: "white",
    height: 58,
    padding: "0px 40px 0px 40px",
    display: "flex",
  },
  navleft: {
    background: "transparent",
    width: "40%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& img": {
      height: "35px",
      width: "35px",
    },
  },

  navright: {
    background: "transparent",
    width: "60%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
