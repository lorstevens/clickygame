import React from "react";
import "./Photos.css";


const Photos = props => (
  <div className= "images">
    <div className="img-container">




    	<img alt={props.name} src={props.image} onClick={(id) =>
    	 {props.handleIncrement(id);
    	 	props.handleLoss(id);
    	  props.handleShuffle(id)}} />

    	  // if (props.isClicked === true){
    	  // 	props.handleLoss()





    	  }
		
 	</div>


  </div>
);
export default Photos;


