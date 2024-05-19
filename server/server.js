const express = require('express');
const cors = require('cors');
const fs = require('fs');

const server = express();
const data = require('./Posts.json');

server.use(express.json());
server.use(cors());

server.post('/api/data/add', (req, res) => {
  const postData = req.body;
  data.push(postData);

  fs.writeFile('./Posts.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error('Error writing file:', err);
      res.status(500).json({
        message: 'Error writing file'
      });
    } else {
      res.status(200).json({
        message: postData
      });
    }
  });
});

server.get('/api/data/', (req, res) => {
  res.status(200).json(data);
});

server.get('/api/data/:id', (req, res) => {
  const { id } = req.params;
  const blogPost = data.find(blogPost => blogPost.id === parseInt(id));

  if (blogPost) {
    res.status(200).json(blogPost);
  } else {
    res.status(404).json({
      message: "Post bulunamadı"
    });
  }
});

server.listen(5000, () => {
  console.log('Sunucu 5000 numaralı portta çalışıyor');
});
