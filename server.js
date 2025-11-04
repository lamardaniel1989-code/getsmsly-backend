const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

let messages = [];

app.post('/api/receive-sms', (req, res) => {
  const { From, To, Body } = req.body;
  messages.push({ from: From, to: To, text: Body, time: new Date() });
  console.log(`📩 SMS from ${From}: ${Body}`);
  res.send('<Response></Response>');
});

app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.get('/', (req, res) => res.send('✅ Twilio SMS API running'));

app.listen(3000, () => console.log('Server running on port 3000'));
