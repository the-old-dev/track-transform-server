var helloHandler = function (req, res) {
    res.send("Hello World, from http://www.heroku.com with a separate handler!!!");
};

module.exports = helloHandler;
