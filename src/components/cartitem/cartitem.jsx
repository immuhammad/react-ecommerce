import {Card, CardActions, CardContent, CardMedia, Typography ,Button } from '@material-ui/core';


import React from 'react'
import useStyles from './styles';


const Cartitem =({item ,onhandlequantity,onhandleremove})=> {
    const classes=useStyles();
    return (
        <Card>
            <CardMedia image={item.image} className={classes.media} alt={item.name}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography variant="h5">{item.name}</Typography>
                <Typography variant="h4"> {item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button  type="button" size="small" onClick={()=> onhandlequantity(item.id,item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=> onhandlequantity(item.id,item.quantity+1)}>+</Button>
                </div>
                <Button variant="contained" color="secondary"  type="button" onClick={() => onhandleremove(item.id)}>Remove</Button>

            </CardActions>
        </Card>
            
    
    )
}

export default Cartitem;
