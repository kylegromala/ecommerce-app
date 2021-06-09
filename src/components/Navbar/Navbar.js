import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles';
import shopIcon from '../../assets/shopicon.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={shopIcon} alt="Commerce.js" height="40px" className={classes.image} />
                        Kyle's Electronics
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>

                    </div>)}
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar
