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
    // We always use the setState method to update a component's state
    this.setState({ isClicked: true });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  };


  handleShuffle = () => {
    //we need 
  	this.setState ({photos: photos.sort(() => Math.random() * 2 -1)})
}

  handleLoss = () => {
    if (this.state.isClicked === true){
      this.setState({count: 0})
      this.setState({isClicked: false})
      alert("Same person-- start again!")
  }
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

