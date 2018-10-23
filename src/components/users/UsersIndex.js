import React from 'react';
import UsersService from './services/UsersService';
import UsersTable from './UsersTable';
import UsersFormCreate from './UsersFormCreate';
import UsersChart from './UsersChart';

class UsersIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  render() {
    const {users} = this.state;

    const numberOfActiveUsers = users.filter(
        user => user.status === 'ACTIVE').length;
    const numberOfInactiveUsers = users.length - numberOfActiveUsers;
    
    return (
        <div>
          <div className="row">
            <div className="col-12">
              <UsersTable users={users}/>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-6">
              <UsersFormCreate onCreateUser={this.handleOnCreateUser}/>
            </div>

            <div className="col-12 col-md-6">
              <UsersChart numberOfActiveUsers={numberOfActiveUsers}
                          numberOfInactiveUsers={numberOfInactiveUsers}/>
            </div>
          </div>


        </div>
    );
  }

  handleOnCreateUser = (user) => {
    this.setState(prevState => ({
      users: [...prevState.users, user],
    }));
  };

  componentDidMount() {

    UsersService.getAllUsers().then(response => {
      this.setState({users: response.data});
    });

  }

}

export default UsersIndex;
