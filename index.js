var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

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

app.get('/:z/:x/:y', function(req, res) {
  res.redirect(`https://ecn.t3.tiles.virtualearth.net/tiles/a${toQuadKey(req.params.x, req.params.y, req.params.z)}.jpeg?g=587&mkt=en-gb&n=z`)
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
