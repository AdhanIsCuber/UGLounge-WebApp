var express = require('express');
var app = express();

require('./routes/index')(app);
app.set('views', __dirname +'/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
  console.log("Application run on http://127.0.0.1:3000");
})
