var sexagesimal = require('../'),
    test = require('tap').test;

test('format', function(t) {
    t.equal(sexagesimal.format(10, 'lat'), '10° N');
    t.equal(sexagesimal.format(10, 'lon'), '10° E');
    t.equal(sexagesimal.format(-10, 'lon'), '10° W');
    t.equal(sexagesimal.format(-10.5, 'lon'), '10° 30\' W');
    t.equal(sexagesimal.format(10.5, 'lon'), '10° 30\' E');
    t.equal(sexagesimal.format(10.51, 'lon'), '10° 30\' 35" E');
    t.equal(sexagesimal.format(10.51, 'lat'), '10° 30\' 35" N');
    t.end();
});

test('format & parse', function(t) {
    t.equal(sexagesimal(sexagesimal.format(10.51, 'lat')).toFixed(2), "10.51");
    t.equal(sexagesimal(sexagesimal.format(10.51, 'lon')).toFixed(2), "10.51");
    t.equal(sexagesimal(sexagesimal.format(10, 'lon')).toFixed(2), "10.00");
    t.equal(sexagesimal(sexagesimal.format(10.5, 'lon')).toFixed(2), "10.50");
    t.end();
});
