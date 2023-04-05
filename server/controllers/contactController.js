    
    // @define:     getAllContacts
    // @ route:     /api/contacts/
    // @ privacy:   protected
    // @ method:    GET
    const getAllContacts = async (req,res) => {
    res.json({message: "get All Contacts!" });
    };

    // @ define:    get all contact
    // @ route:     /api/contacts/
    // @ privacy:   protected
    // @ method:    GET
        const getSingleContact = async (req,res) => {
        res.json({message: "get single contact!" });
    };

    // @ define:    add contact
    // @ route:     /api/contacts/
    // @ privacy:   protected
    // @ method:    POST
    const addContact = async (req,res) => {
        res.json({message: "add contact!" });
    };

    // @ define:    edit contact
    // @ route:     /api/contacts/
    // @ privacy:   protected
    // @ Method:    PUT
    const editContact = async (req,res) => {
        res.json({message: "edit contact!" });
    };

    // @ define:    delete contact
    // @ route:     /api/contacts/:id
    // @ privacy:   protected
    // @ method:    DELETE
    const deleteContact = async (req,res) => {
        res.json({message: "delete contact!" });
    };

module.exports = { 
    getAllContacts, 
    getSingleContact,
    addContact,
    editContact,
    deleteContact };