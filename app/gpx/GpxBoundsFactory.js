const gpxparse = require("gpx-parse");

class GpxBoundsFactory {

    /**
     * A bounds consits of two waypoints:
     * 
     * - waypoint[0] = the upper left edge point, called north-west
     * - waypoint[1] =  the lower right edge point, called south-east
     * 
     * @returns an array with the two waypoints 
     * 
     * @param {[GpxWaypoint, GpxWaypoint]} gpxWaypointsArray 
     */
    static createBounds(gpxWaypointsArray) {

        var minLat = Number.MAX_VALUE;
		var minLon = Number.MAX_VALUE;
        
        var maxLat = -Number.MAX_VALUE;
        var maxLon = -Number.MAX_VALUE;
        
        var latitude = 0.0;
        var longitude = 0.0;

		for (var index = 0; index < gpxWaypointsArray.length; index++) { 

			latitude = gpxWaypointsArray[index].lat;
			longitude = gpxWaypointsArray[index].lon;

			minLat = Math.min(minLat, latitude);
            minLon = Math.min(minLon, longitude);
            
			maxLat = Math.max(maxLat, latitude);
			maxLon = Math.max(maxLon, longitude);

		}
		
		return [new gpxparse.GpxWaypoint(maxLat, minLon), new gpxparse.GpxWaypoint(minLat, maxLon)];
    }

}

module.exports = GpxBoundsFactory;