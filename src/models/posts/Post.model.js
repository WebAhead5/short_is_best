const db = require('../../../database/db_connection');
exports.addNewPost = (content, likes, postdate, userid) => {
  return new Promise((resolve, reject) => {
    var array = [
      content,
      likes,
      postdate,
      userid
    ]
    db.query('INSERT INTO posts (content,likes,postdate,userid) VALUES ($1, $2,$3,$4)', array)
      .then(() => resolve('post has been added')).catch((e) => console.log("Error in insert new post " + e));

  })

}


exports.removepost =  (postid) => {
  return new Promise((resolve, reject) => {
    db.query(`delete from posts where postid= '${postid}';`)
      .then(() => resolve('post has been deleted')).catch((e) => console.log("Error in delete  post " + e));

  })

}




exports.getallposts = () => {
  return new Promise((resolve, reject) => {
    db.query('select * from posts; ')
      .then((posts) => resolve(posts, 'show all comments')).catch((e) => console.log("Error in add  comment " + e));
  })
}

exports.addlikes= (postid,likes) =>{
return new Promise((resolve,reject)=>{
  var arr= [likes,postid]
  db.query('UPDATE  posts SET likes=$1  where postid=$2;',arr)
  .then(()=> resolve('like was added')).catch((e) => console.log("error in likes" +e))
})
}




