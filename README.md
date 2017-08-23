[![npm version](https://badge.fury.io/js/%40mapbox%2Fsexagesimal.svg)](https://badge.fury.io/js/%40mapbox%2Fsexagesimal)
[![Build Status](https://travis-ci.org/mapbox/sexagesimal.svg)](https://travis-ci.org/mapbox/sexagesimal)

## sexagesimal

Convert between [sexagesimal coordinates](http://en.wikipedia.org/wiki/Sexagesimal) and
decimal coordinates.

### Usage

with npm (and/or) browserify

    npm install @mapbox/sexagesimal

otherwise

    curl https://raw.github.com/mapbox/sexagesimal/master/sexagesimal.js

### Examples

```js
var sexagesimal = require('sexagesimal');

// Converting a single DMS coordinate:

sexagesimal('40° 42′ 45.72″ N');  // direction after
// 40.712700000000005
sexagesimal('N40° 42′ 45.72″');   // direction before
// 40.712700000000005
sexagesimal('N40°42′45.72″');     // flexible whitespace
// 40.712700000000005

// Converting a coordinate pair from DMS to lat/lng:

sexagesimal.pair('40° 42′ 45.72″ N, 74° 0′ 21.24″ W');   // direction after
// [ 40.712700000000005, -74.0059 ]
sexagesimal.pair('N 40° 42′ 45.72″, W 74° 0′ 21.24″');   // direction before
// [ 40.712700000000005, -74.0059 ]

// Converting a lat/lon coordinate to DMS:

sexagesimal.coordToDMS(40.71270000000000, 'lat');
// { whole: 40, minutes: 42, seconds: 45, dir: 'N' }
sexagesimal.coordToDMS(-74.0059, 'lon');
// { whole: 74, minutes: 0, seconds: 21, dir: 'W' }


```

### API

```js
sexagesimal(str, dims) // returns a number or null
```

`dims` is by default `NSEW` but can be other ordinal directions expressed
as a string of characters.

```js
sexagesimal.pair(str, dims) // returns [lat, lon] or null
```

`dims` is by default `NSEW` but can be other ordinal directions expressed
as a string of characters.

```js
sexagesimal.format(float, dimension) // returns a formatted string
```

Format a single sexagesimal number. `dimension` must be a string, either
`"lat"` or `"lon"`.

```js
sexagesimal.formatPair({ lat: float, lon: float }) // returns a formatted string
```

Format a sexagesimal coordinate.
