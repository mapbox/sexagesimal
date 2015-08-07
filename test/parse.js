var sexagesimal = require('../'),
    test = require('tap').test;

test('basic directions with degrees', function(t) {
    t.deepEqual(sexagesimal('0° N'), 0);
    t.deepEqual(sexagesimal('66° N'), 66);
    t.deepEqual(sexagesimal('66.5° N'), 66.5);
    t.deepEqual(sexagesimal('66.2525° N'), 66.2525);
    t.deepEqual(sexagesimal('66° S'), -66);
    t.deepEqual(sexagesimal('16° W'), -16);
    t.deepEqual(sexagesimal('26° E'), 26);
    t.end();
});

test('decimals', function(t) {
    t.deepEqual(sexagesimal('26'), 26);
    t.deepEqual(sexagesimal('26.5'), 26.5);
    t.deepEqual(sexagesimal('26.52'), 26.52);
    t.deepEqual(sexagesimal('-26.52'), -26.52);
    t.end();
});

test('minutes', function(t) {
    t.deepEqual(sexagesimal('66° 30\' N'), 66.5);
    t.deepEqual(sexagesimal('66° 30\' E'), 66.5);
    t.deepEqual(sexagesimal('66° 30\' S'), -66.5);
    t.deepEqual(sexagesimal('66° 30\' W'), -66.5);
    t.deepEqual(sexagesimal('0° 30\' N'), 0.5);
    t.end();
});

test('seconds', function(t) {
    t.deepEqual(sexagesimal('66° 30′ 360″ N'), 66.6);
    t.deepEqual(sexagesimal('66° 30′ 720″ S'), -66.7);
    t.deepEqual(sexagesimal('66° 30′ 720" S'), -66.7);
    t.deepEqual(sexagesimal('66° 30′ 720" E'), 66.7);
    t.deepEqual(sexagesimal('66° 30′ 720" W'), -66.7);
    t.end();
});
