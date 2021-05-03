const fetch = require('node-fetch');

const getAll = () => {
  fetch('https://moacyrrln-bk.herokuapp.com/')
    .then((res) => res.json())
    .then((json) => console.log(json));
};

module.exports = {
  getAll,
};
