import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/Home/Home';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
