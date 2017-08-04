const MongoClient = require('mongodb').MongoClient;

let connection = null;

exports.connect = (url, done)=> {
  if (connection) return done();

  MongoClient.connect(url,(err, db)=> {
    if (err) return done(err);
    connection = db;
    done();
  });
};

exports.get = ()=> {
  return connection;
};

exports.close = (done)=> {
  if (connection) {
    connection.close((err, result)=> {
      connection = null;
      state.mode = null;
      done(err);
    });
  }
};
