// converts lat/long degree format to radians for computation
function toRadians(degree) {
    return ((degree*Math.PI)/180);
}
 
  // Uses radians and trigonometry to calculate distance
  // in KILOMETERS between to points of lat/long coordinates
module.exports = function calculateDistance(lat1, lat2, lon1, lon2) {
    var R = 6371; // kilometres
    var φ1 = toRadians(lat1);
    var φ2 = toRadians(lat2);
    var Δφ = toRadians(lat2-lat1);
    var Δλ = toRadians(lon2-lon1);

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    var d = R * c;

    return d;
  }