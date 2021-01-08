import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from "../BuildControls/BuildControl/BuildControl";

const controls = [
     {label: 'Cheese',type: 'cheese'},
     {label: 'Salad',type: 'salad'},
     {label: 'Meat',type: 'meat'},
     {label: 'Beacon',type: 'beacon'},    
];


const buildControls = ({addIngredient,removeIngredient,disabled,currentPrice,isPurchasable,ordered}) => {

     return (
          <div className = {classes.BuildControls}>
               <p>Current Price: $ <strong>{currentPrice.toFixed(2)}</strong></p>
               {controls.map((value,ckey) => {
                    return <BuildControl 
                              label = {value.label}
                              key = {ckey} 
                              add = {() => addIngredient(value.type)}
                              remove = {() => removeIngredient(value.type)}
                              isVisible = {disabled[value.type]}
                              />
               })}
               <button 
                    className = {classes.OrderButton}
                    disabled = {isPurchasable}
                    onClick = {ordered}
                    >ORDER NOW</button>
          </div>
     );
}

export default buildControls;