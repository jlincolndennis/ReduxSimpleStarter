import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBVLXNNekLd7NZgtQ0I0632e1ujNmpHAJs'

// Create a new component. Should produce html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );

}

// Take this component's generated html and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'))
