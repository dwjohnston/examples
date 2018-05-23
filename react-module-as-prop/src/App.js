import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class ModA extends Component{
  render () {
    return <div> this is ModA</div>
  }
}

class ModB extends Component{
  render () {
    return <div> this is ModB</div>
  }
}
class ModC extends Component{
  render () {
    return <div> this is ModC</div>
  }
}

class ThreeMod extends Component{


  render() {
  return (<div className = "ThreeMod"> 
    This is ThreeMod
    <div className ="left">   
      {this.props.moda}
    </div> 

    <div  className ="middle"> 
     {this.props.modb}
    </div> 

    <div  className ="right"> 
      {this.props.modc}
    </div> 

  </div> ); 

  }
}

class App extends Component {


  constructor() {

    super(); 

    this.state = {
      moda: <ModA/> ,
      modb: <ModB/> ,
      modc: <ModC/> 
    }

  }

  render() {


    function getRandomMod() {
      let rand =Math.floor(Math.random() * Math.floor(4));
      switch (rand) {
        case 0 : return <ModA/> 
        case 1: return <ModB/> 
        case 2: return <ModC/> 
        default: return "random text"; 
      }

      
    }

    return (
      <div className="App">
        This is App

        <button onClick = {() => {
          this.setState({moda: getRandomMod() }
          )}}>randomise left </button> 

        <button onClick = {() => {
          this.setState({modb: getRandomMod() }
        )}}>randomise middle  </button> 

        <button onClick = {() => {
          this.setState({modc: getRandomMod() }
        )}}>randomise right</button> 

        <ThreeMod
          moda={<div> hello world </div> }
          modb={this.state.modb}
          modc={this.state.modc}
          /> 

      </div>
    );
  }
}

export default App;
