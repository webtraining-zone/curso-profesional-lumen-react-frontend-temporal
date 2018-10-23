import React from 'react';
import UsersService from './services/UsersService';
import {toast} from 'react-toastify';

class UsersFormCreate extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    if (!event.target.checkValidity()) {
      console.warn('Invalid!');
      return;
    }

    const data = new FormData(event.target);

    UsersService.createUser(data).then((response) => {
      const user = response.data;
      const {name, email} = user;
      toast.success(`User created: ${name} (${email})`);

      // Notificar al componente padre que se ha creado un usuario
      this.props.onCreateUser(user);

    }).catch((response) => {
      toast.error(`Unable to create user`);
      console.error(response);
    });
  };

  render() {
    return (
        <div className="b-form">
          <h2>Create user</h2>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" name="name" className="form-control"
                     id="name" required/>
            </div>

            <div className="form-group">
              <label htmlFor="name">Username *</label>
              <input type="text" name="username" className="form-control"
                     id="username" required/>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email* </label>
              <input type="email" name="email" className="form-control"
                     id="email" required/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control"
                     id="password" placeholder="Password"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    );
  }
}

export default UsersFormCreate;
