[![Build Status](https://travis-ci.org/mapbox/sexagesimal.png)](https://travis-ci.org/mapbox/sexagesimal)

## sexagesimal

Parses [sexagesimal coordinates](http://en.wikipedia.org/wiki/Sexagesimal) into
decimal coordinates.

### usage

with npm (and/or) browserify

    npm install sexagesimal

otherwise

    curl https://raw.github.com/mapbox/sexagesimal/master/sexagesimal.js

### example

```js
sexagesimal('66° 30′ 360″ N') // 66.6
sexagesimal('66° 30′ 720″ S') // -66.7
sexagesimal('66° 30′ 720" S') // -66.7
sexagesimal('66° 30′ 720" E') // 66.7
sexagesimal('66° 30′ 720" W') // -66.7
```

### api

```js
sexagesimal(str) // returns a number or null
```
