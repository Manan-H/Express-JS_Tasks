module.exports.getData = (req, res)=>{
    let currentDate = new Date();
    let currentTime = `${currentDate.getHours()} : ${currentDate.getMinutes()}`;
    res.send({Time: currentTime});
};