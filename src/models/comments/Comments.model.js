const db = require('../../../database/db_connection');


  exports.removecomments=async(postid)=>{
    return new Promise((resolve, reject) => {
      db.query(`delete from comments where postid= '${postid}';`)
      .then(() => resolve('all comments has been removed'),).catch((e) => console.log("Error in remove all  comment " + e));

      })

  }
  exports.removecomment=async(commentid)=>{
    return new Promise((resolve, reject) => {
      db.query(`delete from comments where id= '${commentid}';`)
      .then(() => resolve('comment has been removed'),).catch((e) => console.log("Error in remove  comment " + e));

      })

  }
 

 
  exports.addcomment = async (content, postid, userid) => {
    return new Promise((resolve, reject) => {
      var array1 = [
        content,
        postid,
        userid
      ]
      db.query('INSERT INTO Comments ( content, postid,  userid) VALUES ($1, $2,$3)', array1)
        .then(() => resolve('comment has been added'),).catch((e) => console.log("Error in add  comment " + e));
        console.log(resolve);
        //resolve.....
  
        })
     
    }
 

    exports.getcomments=async(postid)=>{
      return new Promise((resolve, reject) => {
        db.query('SELECT * FROM comments WHERE postid = $1', [postid])
        .then((comments) => resolve(comments,'show all comments'),).catch((e) => console.log("Error in add  comment " + e));


    })}




 // exports.getcomments=(postid)
