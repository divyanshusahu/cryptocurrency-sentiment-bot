require("dotenv").config();

const { TELEGRAM_BOT_TOKEN, SERVER_URL } = process.env;
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const URI = `/webhook/${TELEGRAM_BOT_TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

module.exports = {
  TELEGRAM_BOT_TOKEN: TELEGRAM_BOT_TOKEN,
  SERVER_URL: SERVER_URL,
  TELEGRAM_API: TELEGRAM_API,
  URI: URI,
  WEBHOOK_URL: WEBHOOK_URL,
};
