(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.sexagesimal = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = element;
module.exports.pair = pair;
module.exports.format = format;
module.exports.formatPair = formatPair;
module.exports.coordToDMS = coordToDMS;


function element(input, dims) {
  var result = search(input, dims);
  return (result === null) ? null : result.val;
}


function formatPair(input) {
  return format(input.lat, 'lat') + ' ' + format(input.lon, 'lon');
}


// Is 0 North or South?
function format(input, dim) {
  var dms = coordToDMS(input, dim);
  return dms.whole + '° ' +
    (dms.minutes ? dms.minutes + '\' ' : '') +
    (dms.seconds ? dms.seconds + '" ' : '') + dms.dir;
}


function coordToDMS(input, dim) {
  var dirs = { lat: ['N', 'S'], lon: ['E', 'W'] }[dim] || '';
  var dir = dirs[input >= 0 ? 0 : 1];
  var abs = Math.abs(input);
  var whole = Math.floor(abs);
  var fraction = abs - whole;
  var fractionMinutes = fraction * 60;
  var minutes = Math.floor(fractionMinutes);
  var seconds = Math.floor((fractionMinutes - minutes) * 60);

  return {
    whole: whole,
    minutes: minutes,
    seconds: seconds,
    dir: dir
  };
}


function search(input, dims) {
  if (!dims) dims = 'NSEW';
  if (typeof input !== 'string') return null;

  input = input.toUpperCase();
  var regex = /^[\s\,]*([NSEW])?\s*([\-|\—|\―]?[0-9.]+)[°º˚]?\s*(?:([0-9.]+)['’′‘]\s*)?(?:([0-9.]+)(?:''|"|”|″)\s*)?([NSEW])?/;

  var m = input.match(regex);
  if (!m) return null;  // no match

  var matched = m[0];

  // extract dimension.. m[1] = leading, m[5] = trailing
  var dim;
  if (m[1] && m[5]) {                 // if matched both..
    dim = m[1];                       // keep leading
    matched = matched.slice(0, -1);   // remove trailing dimension from match
  } else {
    dim = m[1] || m[5];
  }

  // if unrecognized dimension
  if (dim && dims.indexOf(dim) === -1) return null;

  // extract DMS
  var deg = m[2] ? parseFloat(m[2]) : 0;
  var min = m[3] ? parseFloat(m[3]) / 60 : 0;
  var sec = m[4] ? parseFloat(m[4]) / 3600 : 0;
  var sign = (deg < 0) ? -1 : 1;
  if (dim === 'S' || dim === 'W') sign *= -1;

  return {
    val: (Math.abs(deg) + min + sec) * sign,
    dim: dim,
    matched: matched,
    remain: input.slice(matched.length)
  };
}


function pair(input, dims) {
  input = input.trim();
  var one = search(input, dims);
  if (!one) return null;

  input = one.remain.trim();
  var two = search(input, dims);
  if (!two || two.remain) return null;

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

},{}]},{},[1])(1)
});
