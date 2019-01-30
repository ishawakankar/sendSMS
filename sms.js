const way2sms = require('way2sms');
const sender = require('./credentials/sender')
const reciever = require('./credentials/reciever')

(async () => {
    cookie = await way2sms.login(sender.number, sender.password); 
    await way2sms.send(cookie, reciever.number, reciever.sms); 
})().catch(err => console.log(err));
