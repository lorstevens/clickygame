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
    count: 0,
    guessed: []
  };


  // handleIncrement = (id) => {
  //   this.setState({ isClicked: true } );
  //   this.setState({ count: this.state.count + 1 });
  //       const photos = this.state.guessed.push(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ photos });
  //   console.log(this.state.guessed)
  // };

onClick =() =>{
  this.handleShuffle();
  this.addToGuessed();

}

handleShuffle = () => {
  this.setState ({photos: photos.sort(() => Math.random() * 2 -1)})
};

incrementCount =() => {
  this.setState({ count: this.state.count + 1 });
}

addToGuessed =id => {
 // const newGuess = [...this.state.guessed, id]
 // this.setState({guessed: newGuess})
 // console.log(newGuess, id)

//if the ID of guessed is not found, then increment count and add the ID to guessed array
//this should work, but doesn't?
  if (this.state.guessed.indexOf(id) === -1) { 
    this.incrementCount();
    this.setState({ guessed: this.state.guessed.concat(id) });
  }
  else {
    this.reset();
  }

console.log(id);
console.log(this.state.guessed); //this is pushing into guessed array, but undefined

};

reset = () => {
  this.setState({count: 0})
}


//render function
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
         	  onClick = {this.onClick}/>

        ))}

      </Wrapper>
    );
  }
}

export default App;

