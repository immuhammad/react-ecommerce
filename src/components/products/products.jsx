import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import Product from "../product/product";
import useStyles from './styles';

const Products = ({products , onaddcart}) => {
  const classes=useStyles();
 
  return (
    <main className={classes.content}>
      <div className={classes.toolbar}/>
      <Grid container justifyContent="center"  spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <Product product={product} onaddcart={onaddcart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
