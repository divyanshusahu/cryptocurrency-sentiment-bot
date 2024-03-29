require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const { parseMessage } = require("./utils");
const { TELEGRAM_API, WEBHOOK_URL, URI } = require("./constants");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());

const init = async () => {
  const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`).then(res => {
    console.log("success ", res.data);
  })
  .catch(err => {
    if (err.res) {
      // If response error then log response, status code and headers
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else {
      // Something else 
      console.log('error: ', err.message);
    }
  })
};

app.post(URI, async (req, res) => {
  const chat_id = req.body.message.chat.id;
  const text = req.body.message.text

  await parseMessage(chat_id, text);

  return res.send();
});

app.listen(PORT, async () => {
  console.log("app running on port", PORT);
  await init();
});
