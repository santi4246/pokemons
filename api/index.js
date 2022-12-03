const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT;

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT || 3001, () => {
    console.log(`Server is listening at ${PORT}`); // eslint-disable-line no-console
  });
});