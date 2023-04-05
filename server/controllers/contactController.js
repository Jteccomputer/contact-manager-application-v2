// @define: getAllContacts
// @route: /api/contacts
// @privacy: protected
const getAllContact = async (req,res) => {
    res.json({message: "get All Contacts!" });
    };

    // @define: get single contact
    // @route: /api/contacts/:id
    // @privacy: protected
        const getSingleContact = async (req,res) => {
        res.json({message: "get single contact!" });
    }

    // @define: add contact
    // @route: /api/contacts
    // @privacy: protected
    const addContact = async (req,res) => {
        res.json({message: "add contact!" });
    }

    // @define: edit contact
    // @route: /api/contacts/:id
    // @privacy: protected
    const editContact = async (req,res) => {
        res.json({message: "edit contact!" });
    }

    // @define: delete contact
    // @route: /api/contacts/:id
    // @privacy: protected
    const deleteContact = async (req,res) => {
        res.json({message: "delete contact!" });
    }

module.exports = { 
    getAllContact, 
    getSingleContact,
    addContact,
    editContact,
    deleteContact };