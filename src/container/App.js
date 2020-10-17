import React, { Component } from 'react';
import requests from '../components/requests';
import './App.css';
import Header from './Header/Header';
import Movies from './Movies/Movies';
import Navbar from './Navbar/Navbar';

class App extends Component {
  state={
    currentOption: requests.fetchTrending
  }

  hangleClick = (item)=>{
    this.setState({currentOption: item});
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Navbar setCurrent={(item)=>{this.hangleClick(item)}}/>
        <Movies selectedOption = {this.state.currentOption}/>
      </div>
    );
  }
}

export default App;
