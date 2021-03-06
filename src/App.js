import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Search from './components/Search.component'
import VideoList from './components/video/VideoList.component';
import VideoDetail from './components/video/VideoDetail.component';
import YApiSearch from "youtube-api-search";

// Google api key
const API_KEY = "AIzaSyCmRF8OBxGlsgYIDuiqipU635hMnE7K0pk";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YApiSearch({key: API_KEY, term: 'bugariu bogdan'}, (videos) => {
      this.setState({
        videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="App container">
          <Search />
          <div className="row">
              <VideoDetail video={this.state.selectedVideo}/>
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
              />
          </div>
      </div>
    );
  }
}

export default App;
