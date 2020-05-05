var database = require("./db_connection.js")


function getposts(cb) {
    database.query('select * from posts; ', (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

function getcomments(postid, cb) {
    database.query(`select * from comments  where postid = '${postid}' ;`
        , (err, res) => {
            if (err) cb(err)
            else cb(null, res.rows);
        })
}


function addpost(content, postdate, userid) {

    database.query(`insert into posts ( content, likes,  postdate, userid) values ('${content}', 0, '${postdate}',${userid};`)

}
function addcomment(content, postid, userid) {
    database.query(`insert into comments ( content, postid,   userid) values ('${content}', '${postid}','${userid}'`)

}



function adduser(email, password, name, admin) {
    database.query(`insert into users (email, password, name, admin) values ('${email}', '${password}', '${name}','false'`)

}
function removepost(postid, cb) {
    database.query(`delete from posts where postid= '${postid}';`, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })

}

function removecomment(postid, cb) {
    database.query(`delete from comments where postid= '${postid}';`, (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}

function getusername(userid, cb) {
    database.query(`select name from users  where userid = '${userid}' ;`
        , (err, res) => {
            if (err) cb(err)
            else cb(null, res.rows);
        })
}

module.exports = { getposts, getcomments, addpost, addcomment, adduser, removepost, removecomment, getusername }
