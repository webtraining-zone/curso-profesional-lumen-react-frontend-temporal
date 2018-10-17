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
}

export default UsersService;
