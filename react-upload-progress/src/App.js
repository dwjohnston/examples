import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import progress from "progress-stream"; 
import axios from 'axios'; 
 

class App extends Component {

  constructor() {
    super();
    this.state = {
      fileprogress:null, 
    }
  }

  render() {
    return (
      <div className="App">




        <form onSubmit={(e) => {
          e.preventDefault();

          

          axios.request( {
            method: "post", 
            url: "/aaa", 
            data: this.state.file, 
            onUploadProgress: (p) => {
              console.log(p); 
              this.setState({
                fileprogress: p.loaded / p.total
              })
            }

          
          }).then (data => {
            this.setState({
              fileprogress: 1.0,
            })
          })


          }}>

          <div className ="file-progress"> 
            <div className = "file-progress-inner" style = {{width:  (this.state.fileprogress && this.state.fileprogress *100 + "%")}}/> 
            <div>
              {this.state.fileprogress && this.state.fileprogress *100 + "%"}
            </div>
          </div> 

          <input type="file" onChange = {(e) => {
              this.setState({file:e.target.files[0]})
          }}/>

          <input type="submit" />

        </form>
      </div>
    );
  }
}

export default App;
