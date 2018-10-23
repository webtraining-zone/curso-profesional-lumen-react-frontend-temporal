import React, {Component} from 'react';
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UsersIndex from './components/users/UsersIndex';

class App extends Component {

  render() {

    return (
        <div className="App">
          <div className="container">
            <UsersIndex/>
          </div>

          <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
          />

        </div>
    );
  }

}

export default App;
