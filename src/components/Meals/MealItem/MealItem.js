import React from 'react';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  return (
    <li key={props.id}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
