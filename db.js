const MongoClient = require('mongodb').MongoClient;

let connection = null;

exports.connect = (url, done)=> {
  if (connection) return done();

  MongoClient.connect(url,(err, db)=> {
    //I have a connection here...
    if (err) return done(err);
    connection = db;
    done();
  });
};

exports.get = ()=> {
  return connection;
};

//closes db so it does not get hung
exports.close = (done)=> {
  if (connection) {
    connection.close((err, result)=> {
      connection = null;
      state.mode = null;
      done(err);
    });
  }
};
