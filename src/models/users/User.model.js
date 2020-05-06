const fs = require('fs');
const db = require('../../../database/db_connection');

// !! will turn the value into a boolean
// so if length is 0 then it's converted to false which means user not found
const checkIfUserExists = (username) =>
  !!db.users.filter((user) => user.username === username).length;

/**
 * @param  {string} email
 */
exports.findByUsername = (email) => {
  return new Promise((resolve, reject) =>
    db
      .query('SELECT * FROM users WHERE email = $1', [email])
      .then((user) => {
        if (!user.rows.length) {
          reject(new Error('No user was found'));
        }
        resolve(user.rows[0]);
      })
      .catch((error) => {
        console.log(`findByUsername Error: ${error}`);
        reject(new Error('An error has occurred in the db, findByUsername'));
      })
  );
}

/**
 * @param  {string} username
 * @param  {string} password
 */
exports.addNewUser = async (email, password, name, admin) => {
  return new Promise((resolve, reject) => {
    // EXISTS returns the following [ { exists: BOOLEAN } ]
    db
      .query('SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)', [email])
      .then((exists) => {
        console.log(exists.rows[0].exists);
        if (exists.rows[0].exists) {

          return reject(new Error('User already exists in our database'));
        }

        // adds the user to the db
        var array = [
          email,
          password,
          name,
          admin
        ]
        // adds the user to the db
        db.query('INSERT INTO users (email,password,name,admin) VALUES ($1, $2,$3,$4)', array)
          .then(() => resolve('User has been added')).catch((e) => console.log("Error in insert new user " + e));


      })
      .catch((error) => {
        console.log(`addNewUser Error: ${error}`);
        reject(new Error('An error has occurred in the db, addNewUser'));
      })
  }
  )
};

exports.getallusers = async () => {
  return new Promise((resolve, reject) => {
    // EXISTS returns the following [ { exists: BOOLEAN } ]
    db.query('SELECT * FROM users')
    .then((users) => resolve(users,'show all users'),).catch((e) => console.log("Error in show all users " + e));

  })};

