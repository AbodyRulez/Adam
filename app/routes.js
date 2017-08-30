module.exports = (app) => {

    app.post('/login', function(req, res) {
        if(req.body.pass === 'satel'){
            res.render('../views/index.ejs');
        } else{
            res.status(401).send(Error);
        }
    });
};