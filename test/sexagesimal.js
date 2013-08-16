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

    describe('invalid input', function() {
        it('returns null for non-strings', function() {
            expect(sexagesimal(20)).to.eql(null);
            expect(sexagesimal({ foo: 'bar' })).to.eql(null);
        });
    });
});
