const express = require('express');

const router = express.Router();

const { createContact } = require('../controllers/contactController');

// POST /api/contacts
router.post('/', createContact);

module.exports = router;
