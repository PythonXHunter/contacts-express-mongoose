const PhoneNumber = require('../models/models')

const getAllContacts = async (req, res) => {
	const contact = await PhoneNumber.find({});
	res.status(200).json({ contact });
}

const createContact = async (req, res) => {
  const contact = req.body;
  try {
    const newContact = await PhoneNumber.create(req.body);
    res.status(201).json({ msg: "Success" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

const getContact = async (req, res) => {
	const { _id: taskId } = req.params;
	// console.log({ _id: taskId })
	const contact = await PhoneNumber.findOne({ _id: taskId });
	if(!contact) {
		// console.log("Data is not present");
		return res.status(404).json({ msg: "Data not found!" })
	}
	res.status(200).json({ contact, msg: "Data founded!"})
}

const deleteContact = async (req, res) => {
	const { _id: contactId } = req.params;
	const contact = await PhoneNumber.findOneAndDelete({ _id: contactId})
	if(!contact){
		return res.status(404).json({ msg: "Data not found!"})
	}
	res.status(200).json({ contact, msg: "Data Deleted"})
}

const updateContact = async (req, res) => {
	const { _id: contactId } = req.params;
	// console.log({ _id: contactId })
	const contact = await PhoneNumber.findOneAndUpdate({ _id: contactId}, req.body, {
		new:true,
	})
	// console.log(contact)
	if(!contact){
		// console.log(contact)
		return res.status(404).json({ msg: "Data not found"})
	}
	res.status(201).json({ contact, msg: "Data Updated!"})
}

module.exports = {
	getAllContacts,
	createContact,
	getContact,
	deleteContact,
	updateContact,
}