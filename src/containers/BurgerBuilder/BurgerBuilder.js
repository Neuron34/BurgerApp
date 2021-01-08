import React , {Component} from 'react';
import Aux from "../../hoc/Auxilary";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Model/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICE = {
     salad: 0.5,
     beacon: 1.4,
     cheese: 0.3,
     meat: 2
}

class BurgerBuilder extends Component{
     state = {
          ingredients: {
               salad: 0,
               beacon: 0,
               cheese: 0,
               meat: 0
          },
          totalPrice: 4,
          purchasable: false,
          purchasing: false
     }

     addIngredientHandler = (type) => {

          const updatedIngredient = {
               ...this.state.ingredients
          };

          updatedIngredient[type] = this.state.ingredients[type] + 1;
          const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];
          this.setState({
               ingredients: updatedIngredient,
               totalPrice: updatedPrice    
          });
          this.updatePurchaseState(updatedIngredient);
     }
     removeIngredientHandler = (type) => {
          const updatedIngredient = {
               ...this.state.ingredients
          };
          updatedIngredient[type] = this.state.ingredients[type] - 1;
          const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];
          this.setState({
               ingredients: updatedIngredient,
               totalPrice: updatedPrice    
          });
          this.updatePurchaseState(updatedIngredient);
     }
     updatePurchaseState = (ingredient) =>{

          const sum = Object.keys(ingredient)
                         .map(igkey => {
                              return ingredient[igkey]
                         }).reduce((oldValue,newValue) => oldValue + newValue);
          this.setState({
               purchasable: sum > 0
          })
     }
     purchaseHandler = () => {
          this.setState({purchasing: true})
     }
     purchaseCancelHandler = () => {
          this.setState({purchasing: false})
     }
     purchaseContinueHandler = () => {
          console.log('hiii --' + Math.random());
     }
     render(){

          const disabledInfo = {
               ...this.state.ingredients
          };
          for(let key in disabledInfo){
               disabledInfo[key] = disabledInfo[key] <= 0;
          }
          return(
               <Aux>
                    <Modal show = {this.state.purchasing} modalClose = {this.purchaseCancelHandler}>
                         <OrderSummary 
                              ingredients = {this.state.ingredients} 
                              purchaseCancel = {this.purchaseCancelHandler} 
                              purchaseOrder = {this.purchaseContinueHandler}/>
                    </Modal>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls 
                         addIngredient = {this.addIngredientHandler}
                         removeIngredient = {this.removeIngredientHandler}
                         disabled = {disabledInfo}
                         currentPrice = {this.state.totalPrice}
                         isPurchasable = {!this.state.purchasable}
                         ordered = {this.purchaseHandler}
                    />
               </Aux>
          );
     }
}

export default BurgerBuilder;