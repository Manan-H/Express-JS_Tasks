const users = require("../users");

exports.getData = (req, res)=>{
    res.send(users);
};