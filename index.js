module.exports = element;
module.exports.pair = pair;
module.exports.format = format;
module.exports.formatPair = formatPair;
module.exports.coordToDMS = coordToDMS;

function element(x, dims) {
  return search(x, dims).val;
}

function formatPair(x) {
  return format(x.lat, 'lat') + ' ' + format(x.lon, 'lon');
}

// Is 0 North or South?
function format(x, dim) {
  var dms = coordToDMS(x,dim);
  return dms.whole + '° ' +
    (dms.minutes ? dms.minutes + '\' ' : '') +
    (dms.seconds ? dms.seconds + '" ' : '') + dms.dir;
}

function coordToDMS(x,dim) {
  var dirs = {
    lat: ['N', 'S'],
    lon: ['E', 'W']
  }[dim] || '',
  dir = dirs[x >= 0 ? 0 : 1],
    abs = Math.abs(x),
    whole = Math.floor(abs),
    fraction = abs - whole,
    fractionMinutes = fraction * 60,
    minutes = Math.floor(fractionMinutes),
    seconds = Math.floor((fractionMinutes - minutes) * 60);

  return {
    whole: whole,
    minutes: minutes,
    seconds: seconds,
    dir: dir
  };
}

function search(x, dims, r) {
  if (!dims) dims = 'NSEW';
  if (typeof x !== 'string') return { val: null, regex: r };
  r = r || /[\s\,]*([\-|\—|\―]?[0-9.]+)°? *(?:([0-9.]+)['’′‘] *)?(?:([0-9.]+)(?:''|"|”|″) *)?([NSEW])?/gi;
  var m = r.exec(x);
  if (!m) return { val: null, regex: r };
  else if (m[4] && dims.indexOf(m[4]) === -1) return { val: null, regex: r };
  else return {
    val: (((m[1]) ? parseFloat(m[1]) : 0) +
          ((m[2] ? parseFloat(m[2]) / 60 : 0)) +
          ((m[3] ? parseFloat(m[3]) / 3600 : 0))) *
          ((m[4] && m[4] === 'S' || m[4] === 'W') ? -1 : 1),
    regex: r,
    raw: m[0],
    dim: m[4]
  };
}

function pair(x, dims) {
  x = x.trim();
  var one = search(x, dims);
  if (one.val === null) return null;
  var two = search(x, dims, one.regex);
  if (two.val === null) return null;
  // null if one/two are not contiguous.
  if (one.raw + two.raw !== x) return null;
  if (one.dim) {
    return swapdim(one.val, two.val, one.dim);
  } else {
    return [one.val, two.val];
  }
}

function swapdim(a, b, dim) {
  if (dim === 'N' || dim === 'S') return [a, b];
  if (dim === 'W' || dim === 'E') return [b, a];
}
