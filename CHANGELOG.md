## 0.5.0

* Exposes `coordToDMS` method

## 0.4.0

* Add `sexagesimal` binary.

## 0.3.0

* Added `.format(float, str) -> str` and `.formatPair({ lat: float, lon: float }) -> str` methods
  that generate sexagesimal strings from decimal values.

## 0.2.1

* No longer tolerates junk at the end of coordinate strings, which has led
  to false-positives like `10 12th Street`.
