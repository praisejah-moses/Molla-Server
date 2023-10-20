import { transport } from "../configs/mailer.config.js";

// Function to send email with otp code 
export const SendEmail = async (to,_subject,_type,param) => {

    const url = `http://localhost:3000/user/confirm/${param}`
  const mailOptions = {
    from:process.env.MAIL_USER,
    subject: 'Confirm Email',
    to:to,
    html: `<p>PLease confirm your email <a href="${url}">${url}</a> </p>`
  };

  return transport.sendMail(mailOptions);
};