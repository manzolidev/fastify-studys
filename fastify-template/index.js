const app = require('fastify')({ logger: true });

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(3000, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
