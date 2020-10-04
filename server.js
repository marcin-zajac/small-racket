const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const connectDB = require('./config/db');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Connect to MongoDB
connectDB()

app.get('/api', function (req, res) {
 return res.send('api route');
});

app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send("main route")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));