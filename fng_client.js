const axios = require("axios");

const BASE_URL = "https://api.alternative.me/fng/";

const get_fng_index = async () => {
  const response = await axios.get(BASE_URL);
  const data = response.data.data;
  return data[0];
};

module.exports = {
  get_fng_index: get_fng_index,
};
