import axios from 'axios';

require('dotenv').config();

// const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url,
    timeout }) {
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
