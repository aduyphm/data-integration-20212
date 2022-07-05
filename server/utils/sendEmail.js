const nodemailer = require('nodemailer');
const sendEmail= async(email,subject,text)=>{
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            secure: true,
            auth: {
                user: "minhhieu194284@gmail.com",
                pass: "ttka26042001",
            },
        });

        await transporter.sendMail({
            from: "baomoisystem@hotmail.com",
            to: email,
            subject: subject,
            text:'Your new password is : '+text 
        });

        console.log("email sent sucessfully");
    } catch (error) {
        console.log(error, "email not sent");
    }
}
module.exports= sendEmail
