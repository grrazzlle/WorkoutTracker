const Workout = require('../models/workout');

module.exports = function(app) {
  app.get('/api/workouts', function(req, res) {
    Workout.find({})
        .then((data) =>{
          // without virtuals
          // for (let i = 0; i < data.length; i++) {
          //   data[i] = data[i].toJSON();
          //   data[i].totalDuration = data[i].exercises.reduce((total, exercise) => {
          //     return total + exercise.duration;
          //   }, 0);
          // };

          res.json(data);
        });
  });


  app.post('/api/workouts', function(req, res) {
    Workout.create({})
        .then((data) => res.json(data));
  });

  app.get('/api/workouts/range', function(req, res) {
    Workout.find({})
        .then((data) =>{
          res.json(data);
        });
  });


  app.post('/api/workouts/range', function(req, res) {
    Workout.create({})
        .then((data) => res.json(data));
  });

  app.put('/api/workouts/:id', ({body, params}, res)=>{
    Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        {new: true, runValidators: true},
    )
        .then((data) => res.json(data));
  });
};
