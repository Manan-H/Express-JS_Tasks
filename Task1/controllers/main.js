module.exports.getData = (req, res)=>{
    let printedTime = req.cookies["Current_Time"];
    res.render('index', { printedTime });
    res.end();
};