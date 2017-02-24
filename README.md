After looking over the dataset, I noticed there are no patterns to make an algorithm faster than O(n). Fortunately, because Latitude and Longitude degrees, minutes and seconds are equivalent (except close to the poles, but in a negligable way), we can calculate distance from a given location based on the delta of the latitude and longitude.

Because the address isn't given with coordinates (which are the only true way to calculate distance), a call to google places api must be made to gain the coordinates. Once the coordinates are obtained, check dataset for closest set of coordinates to entered location. Return data to the user.

Promises had to be used due to the asyncronous nature of node and file system/api requests.