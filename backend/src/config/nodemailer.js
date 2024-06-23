const nodemailer=require('nodemailer');

const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'sergiomarquina004@gmail.com',
        pass:'yqwx ewtq gjjo tpxq'
    }
});

module.exports=transporter;