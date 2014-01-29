var sexagesimal = require('../'),
    expect = require('expect.js');

describe('sexagesimal', function() {
    describe('valid coordinates', function() {
        it('basic directions with degrees', function() {
            expect(sexagesimal('0° N')).to.eql(0);
            expect(sexagesimal('66° N')).to.eql(66);
            expect(sexagesimal('66.5° N')).to.eql(66.5);
            expect(sexagesimal('66.2525° N')).to.eql(66.2525);
            expect(sexagesimal('66° S')).to.eql(-66);
            expect(sexagesimal('16° W')).to.eql(-16);
            expect(sexagesimal('26° E')).to.eql(26);
        });

        it('decimals', function() {
            expect(sexagesimal('26')).to.eql(26);
            expect(sexagesimal('26.5')).to.eql(26.5);
            expect(sexagesimal('26.52')).to.eql(26.52);
            expect(sexagesimal('-26.52')).to.eql(-26.52);
        });

        it('minutes', function() {
            expect(sexagesimal('66° 30\' N')).to.eql(66.5);
            expect(sexagesimal('66° 30\' E')).to.eql(66.5);
            expect(sexagesimal('66° 30\' S')).to.eql(-66.5);
            expect(sexagesimal('66° 30\' W')).to.eql(-66.5);
            expect(sexagesimal('0° 30\' N')).to.eql(0.5);
        });

        it('seconds', function() {
            expect(sexagesimal('66° 30′ 360″ N')).to.eql(66.6);
            expect(sexagesimal('66° 30′ 720″ S')).to.eql(-66.7);
            expect(sexagesimal('66° 30′ 720" S')).to.eql(-66.7);
            expect(sexagesimal('66° 30′ 720" E')).to.eql(66.7);
            expect(sexagesimal('66° 30′ 720" W')).to.eql(-66.7);
        });
    });

    describe('.pair', function() {
        it('ordinals', function() {
            expect(sexagesimal.pair('66N 32W')).to.eql([66, -32]);
            expect(sexagesimal.pair('66S 32W')).to.eql([-66, -32]);
            expect(sexagesimal.pair('32W 66S')).to.eql([-66, -32]);
            expect(sexagesimal.pair('32W, 66S')).to.eql([-66, -32]);
            expect(sexagesimal.pair('66° 30′ 360″ N, 66° 30′ 720" W')).to.eql([66.6, -66.7]);
            expect(sexagesimal.pair('32W, 66S ')).to.eql([-66, -32]);
        });
        it('returns null for non sexagesimal strings', function() {
            expect(sexagesimal.pair('32W, 66S cruft')).to.eql(null);
            expect(sexagesimal.pair('500 johnson st 11310')).to.eql(null);
            expect(sexagesimal.pair('500 5th')).to.eql(null);
            expect(sexagesimal.pair('500 5th st nw')).to.eql(null);
        });
    });

    describe('invalid input', function() {
        it('returns null for non-strings', function() {
            expect(sexagesimal(20)).to.eql(null);
            expect(sexagesimal({ foo: 'bar' })).to.eql(null);
        });
    });
});
