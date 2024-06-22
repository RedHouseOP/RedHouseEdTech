const transporter=require('../config/nodemailer');

exports.sendContactEmail=(req,res)=>{
    const {name, email, message} = req.body;

    const mailOptionsToAdmin ={
        from : email,
        to: 'kulkarniom7057@gmail.com',
        subject:`Contact from submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptionsToAdmin, (error, info)=>{
        if(error){
            return res.status(500).send(error.toString());
        }
        // res.status(200).send('Message sent successfully!');

        const mailOptionsToUser={
            from:'kulkarniom7057@gmail.com',
            to:email,
            subject:'Confirmation of Received Mail',
            html:`
            Just a Hii 
            //  <h3>Thank you for reaching out to us!</h3>
            //     <p>Hi ${name},</p>
            //     <p>We have received your message and will get back to you as soon as possible.</p>
            //     <p><strong>Your Message:</strong></p>
            //     <p>${message}</p>
            //     <p>Best regards,<br/>RedHouseEdTech Team</p>
            `
        };

        transporter.sendMail(mailOptionsToUser,(error,info)=>{
            if(error){
                return res.status(500).send(error.toString());
            }
            res.status(200).send('Message Sent Successfully!');
        });
    });
};