module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index.html')
  });

  app.get('/login', function (req, res) {
    var message = 'Bisa routing';
    res.json(message);
  });

  app.post('/post', function (req, res) {
    var message = 'Bisa post';
    res.json(message);
  })
}
