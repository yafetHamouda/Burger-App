import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        {props.IsAuthenticated
            ? <NavigationItem link="/orders">Orders</NavigationItem>
            : null}
        {props.IsAuthenticated
            ? <NavigationItem link="/Logout">LogOut</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem>}
    </ul>
);

export default navigationItems;

