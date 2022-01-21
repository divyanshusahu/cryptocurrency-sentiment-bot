const axios = require("axios");

const { TELEGRAM_API } = require("./constants");

const sendMessage = async (chat_id, text) => {
  await axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id: chat_id,
    text: text,
  });
};

module.exports = {
  sendMessage: sendMessage,
};
