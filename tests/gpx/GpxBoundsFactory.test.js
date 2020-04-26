var gpxParse = require("gpx-parse");
var GpxBoundsFactory = require("../../app/gpx/GpxBoundsFactory");

var loadedGpx = null;

console.log("Current path:=" + process.cwd());

function getGpx(callback) {
    gpxParse.parseGpxFromFile("tests/resources/bounds-test.gpx", callback);
}

function createBounds(gpxWaypointsArray) {
    return GpxBoundsFactory.createBounds(gpxWaypointsArray);
}


beforeEach(done => {

    var callback = function (error, gpx) {
        if (error !== null) {
            done(error);
        } else {
            loadedGpx = gpx;
            done();
        }
    };

    getGpx(callback);
});

describe('GpxBoundsFactory Tests', () => {

    var bounds = [new gpxParse.GpxWaypoint(...), new gpxParse.GpxWaypoint(...)];

    it('should return the expected bounds from the first segment of the first track', () => {
        expect(loadedGpx).not.toBeNull();
        expect(loadedGpx.tracks).not.toBeNull();
        expect(loadedGpx.tracks[0]).not.toBeNull();
        var wayPoints = loadedGpx.tracks[0].segments[0];
        expect(wayPoints).not.toBeNull();
        expect(wayPoints.length).toBeGreaterThan(100);
        expect(createBounds(wayPoints).toString()).toEqual(bounds.toString());
    });

});