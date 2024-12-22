const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const BOT_TOKEN = '7617557910:AAHdJC5S3jtJtYQsf4lypu6oaB4Laxiy540';
const CHAT_ID = '733914333';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { name, message } = req.body;

    const text = `Имя: ${name}\nСообщение: ${message}`;
    try {
        await axios.post(TELEGRAM_API_URL, {
            chat_id: CHAT_ID,
            text: text,
        });
        res.send('Сообщение отправлено!');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка отправки сообщения.');
    }
});

app.listen(3000, () => console.log('Сервер запущен на порту 3000'));
