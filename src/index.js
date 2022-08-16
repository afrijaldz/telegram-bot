require('dotenv').config()

const axios = require('axios')

const { chats } = require('./chats.json')

function send() {
  chats.forEach(chat => {
    axios.post(`https://api.telegram.org/bot${process.env.BOT_ID}/sendMessage`, {
      chat_id: chat.id,
      text: chat.message
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  })
}

send()