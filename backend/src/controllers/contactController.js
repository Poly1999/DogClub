const Contact = require('../models/Contact');
const transporter = require('../config/nodemailer');

// create new contact
const createContact = async (req, res) => {
  try {
    const { ownerName, dogName, phone, email } = req.body;

    const contact = await Contact.create({
      ownerName,
      dogName,
      phone,
      email,
    });

    // email
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'New contact request - Dog Club',
      html: `
        <h2>New contact request</h2>
        <p><b>Owner name:</b> ${ownerName}</p>
        <p><b>Dog name:</b> ${dogName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact };
