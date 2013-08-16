module.exports = function(x, dims) {
    if (!dims) dims = 'NSEW';
    if (typeof x !== 'string') return null;
    var r = /^([0-9.]+)°? *(?:([0-9.]+)['’′‘] *)?(?:([0-9.]+)(?:''|"|”|″) *)?([NSEW])?/,
        m = x.match(r);
    if (!m) return null;
    else if (m[4] && dims.indexOf(m[4]) === -1) return null;
    else return (((m[1]) ? parseFloat(m[1]) : 0) +
        ((m[2] ? parseFloat(m[2]) / 60 : 0)) +
        ((m[3] ? parseFloat(m[3]) / 3600 : 0))) *
        ((m[4] && m[4] === 'S' || m[4] === 'W') ? -1 : 1);
};
