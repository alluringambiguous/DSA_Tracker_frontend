exports.testController = (req, res) => {
    res.send({ ...req.body });
    
}
