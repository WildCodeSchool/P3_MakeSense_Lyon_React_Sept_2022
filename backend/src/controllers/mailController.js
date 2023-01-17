require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false,
  auth: {
    user: "succi.iris@gmail.com",
    pass: "GqckUYmdyW2EPNht",
  },
});

const sendForgottenPassword = (req) => {
  transporter.sendMail(
    {
      from: "succi.iris@gmail.com",
      to: req.user.email,
      subject: "Réinitialisation de votre mot de passe.",
      text: "Vous souhaitez réinitialiser votre mot de passe ? http://localhost:3000",
      html: `<a href="http://localhost:3000/nouveau-mdp/${req.user.passwordToken}">Cliquez ici</a>`,
    },
    (err, info) => {
      if (err) console.error(err);
      else console.warn(info);
    }
  );
};

module.exports = { sendForgottenPassword };
