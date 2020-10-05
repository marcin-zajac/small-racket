const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

// Connect to MongoDB
connectDB();
app.use(express.json());
// app.use(express.urlencoded({extended: true}));



// Define Routes
app.get('/api', function (req, res) {
  return res.send('api route');
});

app.use('/api/users', require('./routes/api/users'));

app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'build', 'index.html'));
  res.send('main route');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
