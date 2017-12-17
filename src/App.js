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
    count: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  handleShuffle = () => {
  	this.setState ({photos: photos.sort(() => Math.random() * 2 -1)})
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
         	handleShuffle = {this.handleShuffle}/>

        ))}

      </Wrapper>
    );
  }
}

export default App;

