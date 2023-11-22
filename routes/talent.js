const express = require('express');
const router = express.Router();
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./dataBase/db.sqlite3"
    }
});
    // router.post('/getTalentData', (req, res) => {
    //     knex('StaffManage_userinfo').where(req.body).then(rows => {
    //         res.send({ message: 'success', data: rows});
    //     }).catch(err => {
    //         console.log(err);
    //         res.send({ message: 'error', data: []});
    //     });
    // });

    router.post('/getTalentData', (req, res) => {
        
        knex('StaffManage_userinfo').where(req.body).then(rows => {
          const data = rows.map(row => {
            const birthDate = new Date(row.birth_date);
            const age = calculateAge(birthDate);
            return { ...row, age };
          });
          res.send({ message: 'success', data });
        }).catch(err => {
          console.log(err);
          res.send({ message: 'error', data: [] });
        });
      });
      
      function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        return age;
      }
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
