const axios = require("axios");

const { get_fng_index } = require("./fng_client");
const {
  TELEGRAM_API,
  KEYBOARD_COMMANDS,
  FEAR_AND_GREED_INDEX_IMAGE,
} = require("./constants");

const KEYBOARD = [[KEYBOARD_COMMANDS.fetch_fear_and_greed_index]];

const sendMessage = async (chat_id, text) => {
  await axios.post(`${TELEGRAM_API}/sendMessage`, {
    chat_id: chat_id,
    text: text,
    reply_markup: {
      keyboard: KEYBOARD,
      resize_keyboard: true,
    },
  });
};

const sendPhoto = async (chat_id, photo) => {
  await axios.post(`${TELEGRAM_API}/sendPhoto`, {
    chat_id: chat_id,
    photo: photo,
    reply_markup: {
      keyboard: KEYBOARD,
      resize_keyboard: true,
    },
  });
};

const sendWelcomeMessage = async (chat_id) => {
  await sendMessage(chat_id, "Welcome to the Crypto Fear & Greed Index bot");
};

const sendCommandNotFoundMessage = async (chat_id) => {
  await sendMessage(chat_id, "Wrong command selected");
};

const parseMessage = async (chat_id, text) => {
  if (text.match(/\/start/)) {
    await sendWelcomeMessage(chat_id);
  } else if (
    text.toString().indexOf(KEYBOARD_COMMANDS.fetch_fear_and_greed_index) === 0
  ) {
    data = await get_fng_index();
    await sendMessage(chat_id, `${data.value_classification}:${data.value}`)
  } else {
    await sendCommandNotFoundMessage(chat_id);
  }
};

module.exports = {
  parseMessage: parseMessage,
};
