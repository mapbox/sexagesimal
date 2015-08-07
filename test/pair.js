var sexagesimal = require('../'),
    test = require('tap').test;

test('ordinals', function(t) {
    t.deepEqual(sexagesimal.pair('66N 32W'), [66, -32]);
    t.deepEqual(sexagesimal.pair('66S 32W'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66S 32E'), [-66, 32]);
    t.deepEqual(sexagesimal.pair('66 32'), [66, 32]);
    t.deepEqual(sexagesimal.pair('32W 66S'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('32W, 66S'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66° 30′ 360″ N, 66° 30′ 720" W'), [66.6, -66.7]);
    t.deepEqual(sexagesimal.pair('32W, 66S '), [-66, -32]);
    t.end();
});

test('returns null for non sexagesimal strings', function(t) {
    t.deepEqual(sexagesimal.pair('32W, 66S cruft'), null);
    t.deepEqual(sexagesimal.pair('500 johnson st 11310'), null);
    t.deepEqual(sexagesimal.pair('500 5th'), null);
    t.deepEqual(sexagesimal.pair('500 5th st nw'), null);
    t.end();
});
