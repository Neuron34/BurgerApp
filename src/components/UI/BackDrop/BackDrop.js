import React from 'react';
import classes from "./BackDrop.module.css";

const backDrop = ({show,click}) => {
     return (
          show ? (
               <div 
                    className = {classes.BackDrop}
                    onClick = {click}
               >

               </div>
          ) : null
     );
};

export default backDrop;
