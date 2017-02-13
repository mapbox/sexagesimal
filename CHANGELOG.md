:warning: = breaking change

## 1.0.0
##### 2017-Feb-13
* Bump all dependencies
* Require Node 4 or later
* :warning: sexagesimal is now a scoped package under @mapbox namespace

## 0.5.0
##### 2015-Aug-07
* Exposes `coordToDMS` method

## 0.4.0
##### 2014-Dec-06
* Add `sexagesimal` binary.

## 0.3.0
##### 2014-Mar-17
* Added `.format(float, str) -> str` and `.formatPair({ lat: float, lon: float }) -> str` methods
  that generate sexagesimal strings from decimal values.

## 0.2.1
##### 2014-Jan-29
* No longer tolerates junk at the end of coordinate strings, which has led
  to false-positives like `10 12th Street`.
