import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ingredients}) => {

     let transformedIngredient = Object.keys(ingredients).map( (igvalue,igkey) => {
          return [...Array(ingredients[igvalue])]
                    .map((_, key) => {
                         return <BurgerIngredient key = {Math.floor(Math.random() * (10000))} type = {igvalue}/>
                    });
               }).reduce((arr,el) => {
                    return arr.concat(el);
               }, []);

     if(transformedIngredient.length === 0){
          transformedIngredient = <p>Please Start Adding Ingeridients</p>
     }          

     return (
          <div className = {classes.Burger}>
               <BurgerIngredient type = 'bread-top' />
               {transformedIngredient}
               <BurgerIngredient type = 'bread-bottom' />
          </div>
     );
};

export default burger;

