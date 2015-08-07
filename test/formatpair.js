var sexagesimal = require('../'),
    test = require('tap').test;

test('formatPair', function(t) {
    t.equal(sexagesimal.formatPair({ lat: 10, lon: 10 }), '10° N 10° E');
    t.equal(sexagesimal.formatPair({ lat: 10, lon: 10.5 }), '10° N 10° 30\' E');
    t.equal(sexagesimal.formatPair({ lat: 10, lon: -10.5 }), '10° N 10° 30\' W');
    t.end();
});

test('formatPair & parse', function(t) {
    t.deepEqual(sexagesimal.pair(sexagesimal.formatPair({ lat: 10, lon: 10 })), [10, 10]);
    t.deepEqual(sexagesimal.pair(sexagesimal.formatPair({ lat: 10, lon: 10.5 })), [10, 10.5]);
    t.deepEqual(sexagesimal.pair(sexagesimal.formatPair({ lat: 10, lon: -10.5 })), [10, -10.5]);
    t.end();
});
