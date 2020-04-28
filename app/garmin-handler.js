const gpxParse = require("gpx-parse");
var Gpx2WormnavConverter = require("gpx2wormnav-converter");

var garminHandler = function (req, res) {

    var id = req.query.id;

    var uri = "https://connect.garmin.com/modern/proxy/course-service/course/gpx/" + id;

    var remoteGpxResultHanlder = function (error, gpxResult) {
        if (error !== null) {
            res.send("error:=" + error);
        } else {
            var wormnavData = Gpx2WormnavConverter.convert(gpxResult);
            res.send(wormnavData);
        }
    };

    gpxParse.parseRemoteGpxFile(uri, remoteGpxResultHanlder);
};

module.exports = garminHandler;