var sexagesimal = require('../'),
    test = require('tape').test;

test('formatPair', function(t) {
    t.equal(sexagesimal.formatPair({ lat: 10, lon: 10 }), '10° N 10° E');
    t.equal(sexagesimal.formatPair({ lat: 10, lon: 10.5 }), '10° N 10° 30\' E');
    t.equal(sexagesimal.formatPair({ lat: 10, lon: -10.5 }), '10° N 10° 30\' W');
    t.end();
});
