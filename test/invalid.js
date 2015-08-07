var sexagesimal = require('../'),
    test = require('tap').test;

test('invalid input', function(t) {
    t.equal(sexagesimal(20), null);
    t.equal(sexagesimal({ foo: 'bar' }), null);
    t.end();
});
