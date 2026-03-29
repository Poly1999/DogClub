const Contact = require('../models/Contact');

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

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createContact };
