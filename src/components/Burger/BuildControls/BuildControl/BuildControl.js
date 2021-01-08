import React from "react";
import classes from "./BuildControl.module.css";

const buildControl = ({label,add,remove,isVisible}) => {
     return (
          <div className = {classes.BuildControl}>
               <div className = {classes.Label}>{label}</div>
               <button className = {classes.Less} onClick = {remove} disabled = {isVisible}>Less</button>
               <button className = {classes.More} onClick = {add}>More</button>
          </div>
     );
}

export default buildControl;