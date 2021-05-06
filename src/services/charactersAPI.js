import axios from 'axios';
require('dotenv').config();

const DEFAULT_TIMEOUT = 30000;
class CharactersService {
  constructor({ url = 'https://laurods-bk.herokuapp.com', timeout = DEFAULT_TIMEOUT }) {
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
