const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${functions.config().app.user}`,
    pass: `${functions.config().app.pass}`,
  },
});

exports.submitEurope = functions
  .region("europe-west1")
  .https.onRequest((req, res) => {
    cors(req, res, () => {
      if (req.method !== "POST") {
        return res.status(405).send({ error: "Wrong method" });
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: req.body.to,
        subject: `Portfolio`,
        text: `From : ${req.body.email}, name: ${req.body.from}, number: ${req.body.number}, message: ${req.body.message}`,
        html: `<p>From : ${req.body.email} <p>Name: ${req.body.from} <p>Number: ${req.body.number} <p>Message: ${req.body.message}`,
      };

      //sendmail takes two args, todo: pass the response as a callback
      mailTransport.sendMail(mailOptions);
      res.status(200).send({ success: true, data: mailOptions });
    });
  });
