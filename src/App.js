import React, {Component} from 'react';
import './App.css';
import UsersIndex from './components/users/UsersIndex';

class App extends Component {

  render() {

    return (
        <div className="App">
          <UsersIndex/>
        </div>
    );
  }

}

export default App;
