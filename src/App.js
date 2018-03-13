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
      };

  componentDidMount() {
    this.setState({ photos: this.handleShuffle(this.state.photos) });
        }

  handleShuffle = photos => {
    console.log(photos);
    let i = photos.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = photos[i];
      photos[i] = photos[j];
      photos[j] = temp;
      i--;
    }
    return photos;
  };


handleCorrectGuess = (newData) => {
    const {count} = this.state;
    const newScore = count + 1;
    this.setState({
      photos: this.handleShuffle(newData),
      count: newScore,
    });
    console.log(newScore)
  };

  handleIncorrectGuess = photos => {
    this.setState({
      photos: this.resetData(photos),
      count: 0
    });
  };


resetData = photos => {
    const resetData = photos.map(item => ({ ...item, guessed: false }));
    return this.handleShuffle(resetData);
  };



  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.photos.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.guessed) {
          newItem.guessed = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };



//==============================================================


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
            // isClicked ={friend.isClicked}
            count={this.state.count}
         	  handleClick = {this.handleItemClick}/>

        ))}

      </Wrapper>
    );
  }
}

export default App;

