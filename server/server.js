const dotenv = require("dotenv").config();
const express = require("express");
const usersRoute = require("./routes/usersRoute");
const contactRoute = require("./routes/contactRoute");
const db_connection = require("./config/dbConnect");
const productsRoute = require("./routes/productsRoute");
const session = require("express-session");
const MongoDBStore = require('connect-mongodb-session') (session);
const app = express();

db_connection();

const PORT = process.env.PORT || 5000;

// we are going to create a new middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret:process.env.LOGIN_SECRET,
    resave: true,
    saveUninitialized: true,
    store: MongoDBStore({
        uri:process.env.MONGO_URI,
        collection:'session',

    })
}))

app.use("/api/users", usersRoute);
app.use("/api/contacts", contactRoute);
app.use("/api/products", productsRoute);

// building default route for our home page
app.get('/', (req, res) => {

    res.send('home page');
});

app.listen(PORT, () =>  {
    console.log(`Server listening on port ${PORT}!`);
});
