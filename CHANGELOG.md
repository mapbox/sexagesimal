:warning: = breaking change

## 1.2.0
##### 2019-Aug-05
* Handle strings with preceding direction and no comma ([#8])
* Handle more variations of degree symbols ([#9], thanks [@quincylvania])
* Require Node 8+

[#8]: https://github.com/mapbox/sexagesimal/pull/8
[#9]: https://github.com/mapbox/sexagesimal/pull/9
[@quincylvania]: https://github.com/quincylvania

## 1.1.0
##### 2017-Aug-22
* Handle strings where direction appears before the coordinates ([#7], thanks [@sabas])

[#7]: https://github.com/mapbox/sexagesimal/pull/7
[@sabas]: https://github.com/sabas

## 1.0.0
##### 2017-Feb-13
* Bump all dependencies
* Require Node 4+
* :warning: sexagesimal is now a scoped package under @mapbox namespace

## 0.5.0
##### 2015-Aug-07
* Exposes `coordToDMS` method ([#5], thanks [@sabas])

[#5]: https://github.com/mapbox/sexagesimal/pull/5
[@sabas]: https://github.com/sabas

## 0.4.0
##### 2014-Dec-06
* Add `sexagesimal` binary. ([#4], thanks [@kapadia])

[#4]: https://github.com/mapbox/sexagesimal/pull/4
[@kapadia]: https://github.com/kapadia

## 0.3.0
##### 2014-Mar-17
* Added `.format(float, str) -> str` and `.formatPair({ lat: float, lon: float }) -> str` methods
  that generate sexagesimal strings from decimal values.

## 0.2.1
##### 2014-Jan-29
* No longer tolerates junk at the end of coordinate strings, which has led
  to false-positives like `10 12th Street`. ([#2], thanks [@yhahn])

[#2]: https://github.com/mapbox/sexagesimal/pull/2
[@yhahn]: https://github.com/yhahn
