const SibApi = require('sib-api-v3-sdk');
var defaultClient = SibApi.ApiClient.instance;

// # Instantiate the client\
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = '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';
const apiInstance = new SibApi.TransactionalEmailsApi();

const sender = {
    email:"irfansadiq030@gmail.com",
    name:"irfansadiq"
}
const receivers = [
    {
        email:"irfannsadiq@gmail.com"
    }
]

apiInstance.sendTransacEmail({
    sender,
    to:receivers,
    subject:"Testing Send In Blue Service - NODEJS",
    htmlContent :`
        <div style="width:50%; border:2px solid #ffc31d; border-radius:10px; display:block; margin:0 auto; padding:25px;text-align:center;">
            <h4> Assalam o Alikum, Irfan sadiq! </h4>
            <p style="text-style:italic"> please visit my site : <a href="https://irfansadiq.pk">irfansadiq.pk </a> </p>
        </div>
    `
}).then(console.log).catch(console.log)



// Video Tutorial Reference
// https://www.youtube.com/watch?v=4mHsj0aHOEY&ab_channel=CulesCoding