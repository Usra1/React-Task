import React, { Component} from 'react';
import PostList from './posts/PostList';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <PostList />
      </div>
    );
  }
  
}

export default App;
