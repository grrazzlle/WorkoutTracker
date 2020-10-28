const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/WorkoutTracker', {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true});

require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
