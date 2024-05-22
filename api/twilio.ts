const Twilio = require("twilio");


function sendMessage(info : any) {
   //+12674588206
const client = new Twilio("AC38e6ba2e6860a993de8b9ac58816cb5c",'12ab2c94ee3c15dd7b08a156779f2ed3')
const messagearabic = `مرحبا ${info.customer.full_name} طلبك قيد المعالجة`


client.messages
  .create({
    body: messagearabic,
    from: '+13203010161',
    // to: '+212642230300'
    to: info.customer.phone
   })
  .then(message => console.log(message.sid)); 
}

module.exports = sendMessage
