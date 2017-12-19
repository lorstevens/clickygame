import React, { Component } from "react";

import Wrapper from "./components/Wrapper/Wrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Nav from "./components/Nav/Nav";
import Photos from "./components/Photos/Photos";
import photos from "./components/photos.json";


class App extends Component {
  // Setting this.state.photos to the photos json array
  state = {
    photos,
    isClicked: false,
    count: 0
  };


  handleIncrement = () => {
    this.setState({ isClicked: true });
    this.setState({ count: this.state.count + 1 });
  };



  handleShuffle = () => {
  	this.setState ({photos: photos.sort(() => Math.random() * 2 -1)})
};

//THIS DOESN'T ACCOUNT FOR THE ID OF THE IMAGE-- WE WANT TO SEE IF ID IS CLICKED TWICE
  handleLoss = id => {
    if (this.state.isClicked === true){
      this.setState({count: 0})
      this.setState({isClicked: false})
 };



// //   // handleLoss = () => {
// //   //   photos.map(photo => {
// //   //     if(photo.id === photo.id && this.state.isClicked === true){
// //   //       this.setState({count: 0})
// //   //       this.setState({isClicked: false})
// //   //       alert("Same person-- start again!")
// //   //     };
// //   // })

}



render() {
    return (
      <Wrapper>
      	<Jumbotron/>
      

	    <Nav
	    	count={this.state.count}>     
	    </Nav>
      

        {this.state.photos.map(friend => (
          <Photos
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            isClicked ={friend.isClicked}
            count={this.state.count}
         	  handleIncrement={this.handleIncrement}
            handleLoss ={this.handleLoss}
         	  handleShuffle = {this.handleShuffle}/>

        ))}

      </Wrapper>
    );
  }
}

export default App;

