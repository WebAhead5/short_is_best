var database = require("./db_connection.js")
function getposts(cb) {
    database.query('select * from posts; ', (err, res) => {
        if (err) cb(err)
        else cb(null, res.rows);
    })
}


function addpost(content, postdate, userid){

    database.query(`insert into posts ( content, likes,  postdate, userid) values ('${content}', 0, '${postdate}',${userid};`)

}
function addcomment(content, postid, userid) {
    database.query(`insert into comments ( content, postid,   userid) values ('${content}', '${postid}','${userid}'`)

}

exports.addNewUser = (email, password, name, admin) =>
    new Promise((resolve, reject) =>
        // EXISTS returns the following [ { exists: BOOLEAN } ]
        database
            .query('SELECT EXISTS(SELECT 1 FROM users WHERE email = $1)', email)
            .then(([{ exists }]) => {
                if (exists) {
                    return reject(new Error('User already exists in our database'));
                }

                // adds the user to the db
                database.query('INSERT INTO users (email,password,name,admin) VALUES ($1, $2,$3,$4)', [
                    email,
                    password,
                    name,
                    admin
                ]).then(() => resolve('User has been added'));

            })
            .catch((error) => {
                console.log(`addNewUser Error: ${error}`);
                reject(new Error('An error has occurred in the db, addNewUser'));
            })
    );

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
