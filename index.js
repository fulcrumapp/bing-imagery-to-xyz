var fs = require('fs');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

var README = fs.readFileSync('index.txt').toString();

function toQuadKey(x, y, z) {
  var index = ''
  for (var i = z; i > 0; i--) {
    var b = 0
    var mask = 1 << (i - 1)
    if ((x & mask) !== 0) b++
    if ((y & mask) !== 0) b += 2
    index += b.toString()
  }
  return index
}

function source(source) {
  return SOURCES[source] || SOURCES['a'];
}

var SOURCES = {
  'aerial': 'a',
  'streets': 'r'
}

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(README);
});

app.get('/:source/:z/:x/:y', function(req, res) {
  var prefix = source(req.params.source);
  var quadKey = toQuadKey(req.params.x, req.params.y, req.params.z);
  res.redirect(`https://ecn.t3.tiles.virtualearth.net/tiles/${prefix}${quadKey}.jpeg?g=587&mkt=en-gb&n=z`);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
