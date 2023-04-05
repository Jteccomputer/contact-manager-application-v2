const dotenv = require("dotenv").config();
const express = require("express");
const usersRoute = require("./routes/usersRoute");
const contactRoute = require("./routes/contactRoute");
const app = express();

const PORT = process.env.PORT || 5000;

// we are going to create a new middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", usersRoute);
app.use("/api/contacts", contactRoute);

// building default route for our home page
app.get('/', (req, res) => {

    res.send('home page');
});

app.listen(PORT, () =>  {
    console.log(`Server listening on port ${PORT}!`);
});
