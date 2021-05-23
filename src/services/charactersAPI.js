import axios from 'axios';

require('dotenv').config();

const defaultTimeout = 30000;

const DEFAULT_TIMEOUT = process.env.DEFAULT_TIMEOUT || defaultTimeout;

class CharactersService {
  constructor({
    url = `${process.env.REACT_APP_HAWKINS_URL}`,
    timeout = DEFAULT_TIMEOUT,
  }) {
    this.http = axios.create({
      baseURL: url,
      timeout,
    });
  }

  async getCharacters(name, page, size) {
    const params = {
      page,
      size,
      name,
    };

    return this.http.get('/', { params });
  }
}

export default CharactersService;
