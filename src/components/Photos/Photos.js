import React from "react";
import "./Photos.css";


const Photos = props => (
  <div className= "images">
    <div className="img-container">
    	<img alt={props.name} src={props.image} onClick={() => {props.handleShuffle(props.id); props.handleIncrement(props.id)}} />
 		
 	</div>


  </div>
);
export default Photos;


