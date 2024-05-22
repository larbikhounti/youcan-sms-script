const Twilio = require("twilio");
require('dotenv').config();

async function sendMessage(info : any) {
  const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  const messageArabic = `مرحبا ${info.full_name} طلبك قيد المعالجة`;

  try {
    const message = await client.messages.create({
      body: messageArabic,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: info.phone
    });
    return message;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

module.exports = sendMessage;
