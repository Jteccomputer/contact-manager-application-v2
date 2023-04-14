const jwt = require('jsonwebtoken');

const isAuth = async(req, res, next) => { 

    // check if authorisation is present in headers
    const headers = req?.headers?.authorization || req?.headers?.Authorization;
    // console.log(headers);

    // get token
    const token = headers?.split(" ")[1];
    // console.log(token);

    //if no token, status of 401
    if(!token) {
        res.status(401).send({ message: "No token provided." });
        return;
    }

    // verify token
      jwt.verify(token, process.env.LOGIN_SECRET,(err, decoded) => {
        if(err) {
            res.status(403);
            throw new Error(`Invalid Token` );
        }

        req.user = decoded;
        // console.log(req.user);
      });

    // pass next function
    next();

};

module.exports = isAuth;