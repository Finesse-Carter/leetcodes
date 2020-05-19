/* You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false
 

Constraints:

2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
 */

const checkStraightLine = (coords) => {
    if (coords.length === 2) return true;
    
    for (let i=1; i<coords.length-1; ++i) {
        const [x, y] = coords[i - 1];
        const [x2, y2] = coords[i];
        const [x3, y3] = coords[i + 1]

        if (x * (y2 - y3) + x2 * (y3 - y) + x3 * (y - y2) !== 0) return false;
    }
    
    return true;
}