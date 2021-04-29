import axios from 'axios';


class CharactersService {
  constructor({ url = process.env.REACT_APP_HAWKINS_URL
    || process.env.REACT_APP_UPSIDEDOWN_URL,
  timeout = process.env.REACT_APP_HAWKINS_TIMEOUT
    || process.env.REACT_APP_UPSIDEDOWN_TIMEOUT }) {
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
