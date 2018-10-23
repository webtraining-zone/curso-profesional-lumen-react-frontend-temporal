import {API_BASE_URL} from '../../../config/api';
import axios from 'axios';

class UsersService {

  static getAllUsers() {
    const url = `${API_BASE_URL}/users`;

    return axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XmlHttpRequest',
      },
      data: {},// ISSUE! Send an empty object as "data"
    });
  }

  static createUser(data) {
    const url = `${API_BASE_URL}/users`;

    return axios.post(url, {
          name: data.get('name'),
          username: data.get('username'),
          email: data.get('email'),
          password: data.get('password'),
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XmlHttpRequest',
          },
        },
    );
  }
}

export default UsersService;
