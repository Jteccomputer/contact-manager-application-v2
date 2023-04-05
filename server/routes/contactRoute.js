const express = require("express");
const contactRoute = express.Router();

// importing contactController
const { getAllContacts, getSingleContact, addContact, editContact, deleteContact } = require('../controllers/contactController');

// @ define:    get all contact
// @ route:     /api/contacts
// @ privacy:   protected
// @ method:    GET
   contactRoute.get("/", getAllContacts);

// @ define:     get single contact
// @ route:      /api/contacts/:id
// @ privacy:    protected
// @ method:     GET
    contactRoute.get("/:id", getSingleContact );

// @ define:    add contact
// @ route:     /api/contacts
// @ privacy:   protected
// @ method:    POST
    contactRoute.post("/", addContact );

// @ define:    edit contact
// @ route:     /api/contacts/:id
// @ privacy:   protected
// @ Method:    PUT
    contactRoute.put("/:id", editContact );

// @ define:    delete contact
// @ route:     /api/contacts/:id
// @ privacy:   protected
// @ method:    DELETE
   contactRoute.delete("/:id", deleteContact );


module.exports = contactRoute;