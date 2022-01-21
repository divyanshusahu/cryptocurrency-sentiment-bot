require("dotenv").config();

// Server constants
const { TELEGRAM_BOT_TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const URI = `/webhook/${TELEGRAM_BOT_TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

// Application constants
const KEYBOARD_COMMANDS = {
  fetch_fear_and_greed_index: "Get Fear and Greed Index",
};
const FEAR_AND_GREED_INDEX_IMAGE =
  "https://alternative.me/crypto/fear-and-greed-index.png";

module.exports = {
  TELEGRAM_BOT_TOKEN: TELEGRAM_BOT_TOKEN,
  SERVER_URL: SERVER_URL,
  TELEGRAM_API: TELEGRAM_API,
  URI: URI,
  WEBHOOK_URL: WEBHOOK_URL,
  KEYBOARD_COMMANDS: KEYBOARD_COMMANDS,
  FEAR_AND_GREED_INDEX_IMAGE: FEAR_AND_GREED_INDEX_IMAGE,
};
