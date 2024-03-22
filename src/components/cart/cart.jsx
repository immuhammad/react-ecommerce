import React from 'react'
import { Container,Typography, Grid,Button } from "@material-ui/core";
import useStyles from './styles';
import Cartitem from '../cartitem/cartitem';
import { Link } from 'react-router-dom';
const  Cart = ({ cart, handlecartempty, handlecartquantity, handlecartremove }) => {
    
    
    const classes=useStyles();

    const EmptyCart = () =>
    ( 
        <Typography variant="subtitle1">Your have no item in your cart, 
        <Link to="/" className={classes.link}> start adding some</Link>!
        
        </Typography>
    );

    const FilledCart =()=>
    (
        <>

        <Grid container spacing={3} >
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                  <Cartitem item={item} onhandlequantity={handlecartquantity}  onhandleremove={handlecartremove}/>
              </Grid>

            ))}
        </Grid>

                <div className={classes.cardDetails}>
                <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                 <div>
                <Button className={classes.emptyButton} variant="contained" type="button" color="secondary" size="large" onClick={handlecartempty} >Empty Cart</Button>
                 <Button className={classes.checkoutButton} variant="contained" type="button" color="primary" size="large" >Checkout </Button>
                </div>
                </div>
        </>
    );

   if(!cart.line_items) return 'Loading...' ;

    return (
      <Container>
          <div className={classes.toolbar}/>
          <Typography  className={classes.title} gutterBottom variant="h3"> Your Shopping cart </Typography>
            { !cart.line_items ? < EmptyCart /> : < FilledCart /> }
         

      </Container>
    );
}

export default Cart;
