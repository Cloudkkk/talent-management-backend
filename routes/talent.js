const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./dataBase/db.sqlite3"
    }
});
    router.post('/getTalentData', (req, res) => {
        knex('StaffManage_userinfo').where(req.body).then(rows => {
            res.send({ message: 'success', data: rows});
        }).catch(err => {
            console.log(err);
            res.send({ message: 'error', data: []});
        });
    });
    router.post('/addTalent', (req, res) => {
        knex('StaffManage_userinfo').insert(req.body).then(() => {
            res.send({ message: 'success'});
        }).catch(err => {
            console.log(err);
            res.send({ message: 'error'});
        });
    });
    router.delete('/deleteTalent', (req, res) => {
        knex('StaffManage_userinfo').where('id', req.body.id).del().then(() => {
            res.send({ message: 'success'});
        }).catch(err => {
            console.log(err);
            res.send({ message: 'error'});
        });
    }); 
    router.put('/updateTalent', (req, res) => {
        knex('StaffManage_userinfo').where('id', req.body.id).update(req.body).then(() => {
            res.send({ message: 'success'});
        }).catch(err => {
            console.log(err);
            res.send({ message: 'error'});
        });
    });
    
module.exports = router;
