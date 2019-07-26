let users = require("../users");

module.exports.getData = (req, res)=>{
    let user = users.find((user) => {
        return user.userId === "123";
    })
    res.render('result', {Username: user.username })
};
