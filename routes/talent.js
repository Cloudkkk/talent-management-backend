const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
router.post('/getTalentData', (req, res) => {
    console.log('131313');
    res.send({ message: 'success', data: [
        {
          key: '1',
          name: '张三',
          age: 32,
          address: '北京市',
        },
        {
          key: '2',
          name: '李四',
          age: 42,
          address: '上海市',
        }
      ]});
    });
module.exports = router;
