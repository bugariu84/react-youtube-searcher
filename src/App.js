import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from './components/Search.component'
import VideoList from './components/video/VideoList.component';
import VideoDetail from './components/video/VideoDetail.component';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <Search />
          <div className="row">
            <div className="col-md-4">
              <VideoList />
            </div>
            <div className="col-md-8">
              <VideoDetail />
            </div>
          </div>
      </div>
    );
  }
}

export default App;
