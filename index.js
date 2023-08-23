const express = require('express');
const next = require('next');
const sqlite3 = require('sqlite3').verbose();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  // Set up SQLite database connection
  const db = new sqlite3.Database(':memory:');

  // Create tables and perform other database operations
  // ...

  // Define routes
  // ...

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
