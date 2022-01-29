import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: 'contact.mehin@gmail.com',
    pass: '*Mj"dhKs{F9\\;73/',
  },
  secure: true,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  const { name, email, message } = JSON.parse(req.body);

  const mailData = {
    from: 'contact.mehin@gmail.com',
    to: 'akberli.mehin@gmail.com',
    subject: `Contact form notification`,
    html: `
      <div>
        <p><strong>From: </strong>${name}</p>
        <p><strong>Email: </strong>${email}</p>
        ${message}
      </div>
    `
  }

  transporter.sendMail(mailData, function (err) {
    if(err) {
      res.status(500).json({
        msg: 'Something went wrong, try again later'
      });
    } else {
      res.end();
    }
  });
}