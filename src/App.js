import React, {Component} from 'react';
import List from './list';
import Scroll from './scroll';
import Search from './search';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots : [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users =>{this.setState({ robots: users})});
  }

  onSearch = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render(){
    const searchRobots = this.state.robots.filter(robot =>{
      return robot.username.toLowerCase().includes(this.state.searchField.toLowerCase());
    })
    if(this.state.robots.length === 0){
      return(
        <h1 className='f1 tc'>Loading...</h1>
      );
    }
    else{
      return (
        <div className='tc'>
          <h1 className='f1'> ROBO FRIENDS </h1>
          <Search searchChange={this.onSearch}/>
          <Scroll>
            <ErrorBoundary>
              <List robots = {searchRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;