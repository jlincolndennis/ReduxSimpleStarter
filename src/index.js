import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from "./components/video_detail"
const API_KEY = 'AIzaSyBVLXNNekLd7NZgtQ0I0632e1ujNmpHAJs'
// const API_KEY = 'AIzaSyCCxViVe7c5DApoDIpCpxI5dtEl6Xx-19c'

// Create a new component. Should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    YTSearch({key: API_KEY, term: 'snow'}, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

// Take this component's generated html and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'))
