
const users = require("../users");

exports.getData = (req, res)=>{
    res.render('form');
};

exports.setData = (req, res)=>{
    let user = req.body;
    user.userId = "123";
    users.push(user);
    res.redirect('/result');
};