const sqlite3 = require('sqlite3').verbose();

// Set up SQLite database connection
const db = new sqlite3.Database(':memory:');

// Create user table
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');
});

module.exports = db;
