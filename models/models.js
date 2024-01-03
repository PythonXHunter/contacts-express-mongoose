const mongoose = require('mongoose')

const phoneNumberSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name field is required']
	},
	phone_number: {
		type: Number,
		required: [true, 'Phone number field is required']
	}
})

const PhoneNumber = mongoose.model('PhoneNumber', phoneNumberSchema);

module.exports = PhoneNumber