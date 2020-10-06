const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/db');

const passport = require('passport');
require('./config/passport/setup')(passport);

// initialize express app
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));


// Connect to MongoDB
connectDB();

// initialize passport
app.use(passport.initialize());

// Define Routes
app.get('/api', function (req, res) {
  return res.send('api route');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/protected', require('./routes/api/protected'));

app.get('/', function (req, res) {
  res.send('main route');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
