const db = require('../../../database/db_connection');
exports.addNewPost = async (content, postdate, userid) => {
    return new Promise((resolve, reject) => {
      db
        .query(`insert into posts ( content, likes,  postdate, userid) values ('${content}', 0, '${postdate}',${userid};`)
        .then(() => {
        //resolve.....
  
        })
        .catch((error) => {
          console.log(`addNewUser Error: ${error}`);
          reject(new Error('An error has occurred in the db, addNewUser'));
        })
    }
    )
  };