import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import PictureCard from "./components/PictureCard";
import pictures from "./pictures.json";
import Container from "./components/Container";
import Col from "./components/Col";
import Row from "./components/Row"
import './App.css';

class App extends Component {
  state = {
    pictures,
    score: 0
    //add in scores & clicked
  }
  //do we put this code into a file in src?
  //handler for onclick
  HandleClick = () => {

    this.handleIncrement()
  }

  //handle increment for score
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };
 //handle random shuffle
 
 //handle game reset
 

  render() {
    return (
      <Wrapper>
        <Navbar
          title="Clicky Game"
        //scores
        />
        <br />
        <Title><h1><strong>Clicky Game</strong></h1><p>Click on an image to earn points, but don't click on any more than once</p></Title>
        <Container>
          <Row>
            {this.state.pictures.map(picture => (
              <Col size="md-3">
                <PictureCard
                  id={picture.id}
                  image={picture.image}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
