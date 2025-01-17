// routes/account.js
const express = require('express');
const router = express.Router();

// 
const sqlite3 = require('sqlite3').verbose();

// 打开数据库连接
const db = new sqlite3.Database('./mydatabase.db', (err) => {
    if (err) {
        return console.error('数据库连接失败:', err.message);
    }
    console.log('成功连接到 SQLite 数据库');
});

// 定义一个数组，用于存放查询结果
const examersData = [];

// 查询数据并将每一行数据推入数组
db.all('SELECT * FROM examers', (err, rows) => {
    if (err) {
        return console.error('查询失败:', err.message);
    }

    // 将查询结果放入数组中
    rows.forEach(row => examersData.push(row));

    // 输出数组，验证数据已存储
    
});

// 关闭数据库连接
db.close((err) => {
    if (err) {
        return console.error('关闭数据库失败:', err.message);
    }
    
});

// 


const managers = examersData




// 获取所有账号
router.get('/', (req, res) => {
    res.json(managers); // 发送账号作为响应
});

module.exports = router;
