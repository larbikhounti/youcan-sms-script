

const Twilio = require("twilio");


async function sendMessage(info) {

   //+12674588206
const client = new Twilio("AC38e6ba2e6860a993de8b9ac58816cb5c",'12ab2c94ee3c15dd7b08a156779f2ed3')
const messagearabic = `مرحبا ${info.full_name} طلبك قيد المعالجة`


return await client.messages
  .create({
    body: messagearabic,
    from: '+13203010161',
    // to: '+212642230300'
    to: info.phone
   })
  .then(message =>  message ).catch(err =>  err); 
}
module.exports = sendMessage
