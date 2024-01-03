const express = require('express')
const router = express.Router()
const PhoneNumber = require('../models/models')
const {
	getAllContacts,
	createContact,
	getContact,
	deleteContact,
	updateContact,
} = require('../controllers/controller')

// router.get('/', getAllContacts)

// router.post('/', createContact);

router.route('/').get(getAllContacts).post(createContact);
router.route('/:_id').get(getContact).delete(deleteContact).patch(updateContact)

// router.get('/:_id', )

// router.delete('/:_id', )

// router.put('/:_id', )

module.exports = router;