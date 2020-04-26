const Gpx2WormnavPointConverter = require("./Gpx2WormnavPointConverter");
const gpxparse = require("gpx-parse");

/**
* Converts from GPX Bounds to Wormnav Bounds.
* 
* Wormnav Bounds Data Format: 
*
* The North-West (Upper-Left) Edge Point:
* <li>bounds[0] = West Latitude {float [Wormnav]}
* <li>bounds[1] = North Longitude {float [Wormnav]}
*
* The South-East (Lower-Right) Edge Point:
* <li>bounds[2] = East Latitude {float [Wormnav]}
* <li>bounds[3] = South Latitude {float [Wormnav]}
*
* The Center Point
* <li>bounds[4] = center Latitude (flaot [Radian])
* <li>bounds[5] = center Longitude (float [Radian])
*
* The diagonal distance
* <li>bounds[6] = diagonal distance (float [Meters])
* 
*/
class Gpx2WormnavBoundsConverter {

    /**
     * Converts GPX Bounds to Wormnav Bounds
     * 
     * @param {GpXWayPoint} northEastEdgePoint, the upper left, called north-west
     * @param {GpXWayPoint} southWestEdgePoint, the lower right, called south-east 
     */

        Todo : Do more Object orientation instead of [][][][]


    static convert(northEastEdgePoint, southWestEdgePoint) {

        var northEastEdgePointInWormnav = Gpx2WormnavPointConverter.convert([northEastEdgePoint.lat.toRad()], )
        

    }

}

module.exports = Gpx2WormnavBoundsConverter;