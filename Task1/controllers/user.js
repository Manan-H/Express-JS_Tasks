let users = require("../users");

module.exports.getData = (req, res)=>{
    res.send(users);
};