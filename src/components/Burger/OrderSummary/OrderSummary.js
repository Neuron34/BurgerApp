import React from "react";
import Aux from '../../../hoc/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = ({ingredients,purchaseOrder,purchaseCancel}) => {
     const ingredientList = Object.keys(ingredients)
                              .map(igkey => {
                                   return (
                                        <li key = {igkey} style = {{textTransform: 'capitalize'}}>
                                             <span>{igkey}</span>: {ingredients[igkey]}
                                        </li>
                                   );
                              });
     return (
          <Aux>
               <h3>Your Order</h3>
               <p>A delecious burger with following ingredient</p>
               <ul>
                    {ingredientList}
               </ul>
               <p>Continue to checkout ?</p>
               <Button btnType = "Success" click = {purchaseOrder}>OK</Button>
               <Button btnType = "Danger" click = {purchaseCancel}>Cancel</Button>
          </Aux>
     );
}

export default orderSummary;