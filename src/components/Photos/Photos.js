import React from "react";
import "./Photos.css";


const Photos = props => (
  <div className= "images">
    <div className="img-container">

    




    	<img alt={props.name} src={props.image} onClick={(id) =>
    	 {
    	 	props.handleClick(props.id)}}
    	   />





    	  
		
 	</div>


  </div>
);
export default Photos;


