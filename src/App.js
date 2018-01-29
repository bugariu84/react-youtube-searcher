import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from './components/Search.component'

class App extends Component {
  render() {
    return (
      <div className="App container">
          <Search />
          <div className="row">
            <div className="col-md-4">@vide_details_area</div>
            <div className="col-md-8">@video_list_area</div>
          </div>
      </div>
    );
  }
}

export default App;
