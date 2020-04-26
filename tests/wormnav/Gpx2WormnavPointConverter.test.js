var gpxParse = require("gpx-parse");
var Gpx2WormnavPointConverter = require("../../app/wormnav/Gpx2WormnavPointConverter");

describe('Gpx2WormnavPointConverter Tests', () => {

    var point = [...];
    var centerInRadians = [...];
    var expectedWormnavPoint = [...];

    it('should convert one point correctly', () => {

        var pointInRadians = [point[0].toRad(), point[1].toRad()];
        var wormnavPoint = Gpx2WormnavPointConverter.convert(pointInRadians, centerInRadians)

        expect(wormnavPoint).toEqual(expectedWormnavPoint);
    });

});