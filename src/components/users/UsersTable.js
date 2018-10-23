import React from 'react';

class UsersTable extends React.Component {
  render() {
    const {users} = this.props;

    return (
        <div>
          <h1>Users</h1>
          <table className="table">
            <thead className="thead-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {
              users.map(user => (
                  <tr key={user.id.toString()}>
                    <th scope="row">{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.status}</td>
                    <td>TBD</td>
                  </tr>
              ))
            }
            </tbody>
          </table>
        </div>
    );
  }
}

export default UsersTable;
