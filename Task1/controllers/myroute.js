module.exports.getData = (req, res)=>{
      let enteredParam = req.params.param;
    //let enteredQueries = JSON.stringify(req.query);
    let enteredQueries = req.query;
    res.render('params', { enteredParam, enteredQueries });
};