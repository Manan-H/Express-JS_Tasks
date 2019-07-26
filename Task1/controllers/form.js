
let users = require("../users");

module.exports.getData = (req, res)=>{
    res.render('form');
};

module.exports.setData = (req, res)=>{
    let user = req.body;
    user.userId = "123";
    users.push(user);
    res.redirect('/result');
};