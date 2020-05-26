import React, {Component} from "react";
import CardList from "../Components/CardList";
import {robots} from "../Components/robots";
import SearchBox from "../Components/SearchBox";
import './App.css';
import Scroll from "../Components/Scroll";

// STATE >> props

const state = {

}

class App extends Component{
  constructor(){
    super()
    this.state = {
      robots:[],
      searchfield:""
    }
  }

componentDidMount(){
  this.setState({robots:robots})
}

  onSearchChange = (event) => {
    this.setState({searchfield:event.target.value})

  }
  render(){
    const filterRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
      <div className="tc">
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
        <CardList robots={filterRobots}/>
      </Scroll>
      </div>
    );
  }
}

export default App;
