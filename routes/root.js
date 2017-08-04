const express = require('express');
const routes = express.Router();
// const data = require('../data');
const db = require('../db');


//
// for (let i = 0; i < data.users.length; i++){
//   if(data.users[i].job === null){
//     data.users[i].job = "Available for hire";
//   }
// };

routes.get('/', (req, res) => {
  let coll = db.get().collection('users');

  coll.find({}).toArray((err, users) => {
    res.render('home', {users: users});
  });
})

routes.get('/employed',(req, res)=>{
  let coll = db.get().collection('users');

coll.find({job: {$ne: [null]}}).toArray((err, users) => {
    res.render('employed', { users: users });
  });
})

routes.get('/unemployed', (req, res) => {
  let coll = db.get().collection('users');

coll.find({job: null}).toArray((err, users) => {
    res.render('unemployed', {users: users});
  });
})

routes.get('/:username', (req, res) => {
  let coll = db.get().collection('users');

  coll.find({username: req.params.username}).toArray((err, users) => {
    res.render('bio', {users: users});
  });
})



module.exports = routes;
