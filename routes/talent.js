const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// let db = new sqlite3.Database(':memory:', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the in-memory SQlite database.');
// });

// db.run('CREATE TABLE langs(name text)');

router.post('/add', (req, res) => {
    console.log(123123);
//   db.run(`INSERT INTO langs(name) VALUES(?)`, [req.body.name], function(err) {
//     if (err) {
//       return console.log(err.message);
//     }
//     res.send({ message: 'success', id: this.lastID });
//   });
});

router.get('/get', (req, res) => {
    console.log('131313');
//   db.all('SELECT * FROM langs', [], (err, rows) => {
//     if (err) {
//       throw err;
//     }
//     res.send(rows);
//   });
});

router.put('/update/:id', (req, res) => {
//   db.run(`UPDATE langs SET name = ? WHERE rowid = ?`, [req.body.name, req.params.id], function(err) {
//     if (err) {
//       return console.error(err.message);
//     }
//     res.send({ message: 'success', changes: this.changes });
//   });
});

router.delete('/delete/:id', (req, res) => {
//   db.run(`DELETE FROM langs WHERE rowid = ?`, req.params.id, function(err) {
//     if (err) {
//       return console.error(err.message);
//     }
//     res.send({ message: 'success', changes: this.changes });
//   });
});

module.exports = router;
