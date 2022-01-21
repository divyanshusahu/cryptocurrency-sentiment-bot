process.env.NTBA_FIX_319=1

const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const url = process.env.APP_URL

const options = {
  webhook: {
    port: process.env.PORT || 5000
  }
}

const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, options);

bot.setWebHook(`${url}/webhook/${TELEGRAM_BOT_TOKEN}`)

const FETCH_FEAR_AND_GREED_INDEX_MESSAGE = "Get Fear and Greed Index";

const FEAR_AND_GREED_INDEX_IMAGE =
  "https://alternative.me/crypto/fear-and-greed-index.png";

bot.onText(/\/start/, (message) => {
  bot.sendMessage(
    message.chat.id,
    "Welcome to the Crypto Fear & Greed Index bot",
    {
      reply_markup: {
        keyboard: [[FETCH_FEAR_AND_GREED_INDEX_MESSAGE]],
      },
    }
  );
});

bot.on("message", (message) => {
  if (
    message.text.toString().indexOf(FETCH_FEAR_AND_GREED_INDEX_MESSAGE) === 0
  ) {
    bot.sendPhoto(message.chat.id, FEAR_AND_GREED_INDEX_IMAGE, {
      reply_markup: {
        keyboard: [[FETCH_FEAR_AND_GREED_INDEX_MESSAGE]],
      },
    });
  } else {
    bot.sendMessage(message.chat.id, "Wrong command selected", {
      reply_markup: {
        keyboard: [[FETCH_FEAR_AND_GREED_INDEX_MESSAGE]],
      },
    });
  }
});
