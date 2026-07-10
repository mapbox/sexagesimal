var sexagesimal = require('../');
var test = require('tap').test;

test('plain ordinals', function(t) {
    t.deepEqual(sexagesimal.pair('66 32'), [66, 32]);
    t.deepEqual(sexagesimal.pair('66, 32'), [66, 32]);
    t.deepEqual(sexagesimal.pair('-66 -32'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('-66, -32'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66° 30′ 360″, -66° 30′ 720"'), [66.6, -66.7]);
    t.end();
});

test('trailing dimension, no separator', function(t) {
    t.deepEqual(sexagesimal.pair('66N 32W'), [66, -32]);
    t.deepEqual(sexagesimal.pair('66 S 32 W'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66S 32E'), [-66, 32]);
    t.deepEqual(sexagesimal.pair('32 w 66 s'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66° 30′ 360″ N 66° 30′ 720" W'), [66.6, -66.7]);
    t.deepEqual(sexagesimal.pair('32W 66S'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('32 e 66 n'), [66, 32]);
    t.end();
});

test('trailing dimension, comma separator', function(t) {
    t.deepEqual(sexagesimal.pair('66N, 32W'), [66, -32]);
    t.deepEqual(sexagesimal.pair('66 S, 32 W'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66S, 32E'), [-66, 32]);
    t.deepEqual(sexagesimal.pair('32 w , 66 s'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('66° 30′ 360″ N, 66° 30′ 720" W'), [66.6, -66.7]);
    t.deepEqual(sexagesimal.pair('32W , 66S'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('32 e, 66 n'), [66, 32]);
    t.end();
});

test('leading dimension, no separator', function(t) {
    t.deepEqual(sexagesimal.pair('N66 W32'), [66, -32]);
    t.deepEqual(sexagesimal.pair('S 66 W 32'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('S66 E32'), [-66, 32]);
    t.deepEqual(sexagesimal.pair('w 32 s 66'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('N 66° 30′ 360″  W 66° 30′ 720"'), [66.6, -66.7]);
    t.deepEqual(sexagesimal.pair('W32 S66'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('e 32 n 66'), [66, 32]);
    t.end();
});

test('leading dimension, comma separator', function(t) {
    t.deepEqual(sexagesimal.pair('N66, W32'), [66, -32]);
    t.deepEqual(sexagesimal.pair('S 66, W 32'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('S66, E32'), [-66, 32]);
    t.deepEqual(sexagesimal.pair('w 32 , s 66'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('N 66° 30′ 360″,  W 66° 30′ 720"'), [66.6, -66.7]);
    t.deepEqual(sexagesimal.pair('W32 , S66'), [-66, -32]);
    t.deepEqual(sexagesimal.pair('e 32, n 66'), [66, 32]);
    t.end();
});

test('returns null for non sexagesimal strings', function(t) {
    t.deepEqual(sexagesimal.pair('|32, |66'), null);
    t.deepEqual(sexagesimal.pair('W32, S66 cruft'), null);
    t.deepEqual(sexagesimal.pair('cruft W32, S66'), null);
    t.deepEqual(sexagesimal.pair('cruft W32, S66 cruft'), null);
    t.deepEqual(sexagesimal.pair('500 johnson st 11310'), null);
    t.deepEqual(sexagesimal.pair('500 5th'), null);
    t.deepEqual(sexagesimal.pair('500 5th st nw'), null);
    t.deepEqual(sexagesimal.pair(' '), null);
    t.end();
});
