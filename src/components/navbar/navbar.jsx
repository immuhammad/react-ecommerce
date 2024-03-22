import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,

} from "@material-ui/core";
import {Link ,useLocation} from 'react-router-dom'
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./styles";

function Navbar({totalitems}) {
  const classes = useStyles();
  const location=useLocation();
  return (

    <>
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <Toolbar>
        <Typography component={Link} to="/" className={classes.title} color="inherit">
          <img
            className={classes.image}
            src={logo}
            height="25px"
            alt="commerce.js"
          />
          commerce.js
        </Typography>
        <div className={classes.grow} />
        {location.pathname === '/' && (
        <div className={classes.button}>
          <IconButton component={Link} to="/cart" aria-label="items in cart" color="inherit">
            <Badge badgeContent={totalitems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>)}
      </Toolbar>
    </AppBar>
    </>
  );
}

export default Navbar;
