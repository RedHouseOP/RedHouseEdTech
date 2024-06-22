const nodemailer=require('nodemailer');

const transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'kulkarniom7057@gmail.com',
        pass:'oznq xxkh xkuu zlxi'
    }
});

module.exports=transporter;