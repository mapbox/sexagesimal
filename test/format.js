var sexagesimal = require('../'),
    test = require('tape').test;

test('format', function(t) {
    t.equal(sexagesimal.format(10, 'lat'), '10° N');
    t.equal(sexagesimal.format(10, 'lon'), '10° E');
    t.equal(sexagesimal.format(-10, 'lon'), '10° W');
    t.equal(sexagesimal.format(-10.5, 'lon'), '10° 30\' W');
    t.equal(sexagesimal.format(10.5, 'lon'), '10° 30\' E');
    t.equal(sexagesimal.format(10.51, 'lon'), '10° 30\' 2159" E');
    t.equal(sexagesimal.format(10.51, 'lat'), '10° 30\' 2159" N');
    t.end();
});
