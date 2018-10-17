import React from 'react';
import UsersService from './services/UsersService';

class UsersIndex extends React.Component {
  state = {users: []};

  render() {
    const {users} = this.state;
    return (
        <div>
          <h1>Users</h1>
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              users.map(user => (
                  <tr key={user.id.toString()}>
                    <th scope="row">1</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>TBD</td>
                  </tr>
              ))
            }
            </tbody>
          </table>
        </div>
    );
  }

  componentDidMount() {

    UsersService.getAllUsers().then(response => {
      this.setState({users: response.data});
    });
  }

}

export default UsersIndex;
