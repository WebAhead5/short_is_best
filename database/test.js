const tape = require("tape");
const { findByUsername, addNewUser, getallusers } = require('../src/models/users/User.model')
const { addNewPost, removepost, getposts, getallposts } = require('../src/models/posts/Post.model')
const { addcomment, removecomments, removecomment, getcomments } = require('../src/models/comments/Comments.model')

const runDbBuild = require("./db_build");//not clear
const db = require('./db_connection');



//=======================
tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});


//===========================================
tape("findByUsername ", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        expected = []

        try {
            const oldusersnum = findByUsername('Amir').then((data) => {
                t.deepEqual(data.rows, expected, 'check if added new user')
                t.end();
            });
        } catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with finding username" + err)
            t.end();
        }

    })
})

const email = 'amir111@gmail.com'
tape("add user", t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors


        try {
            const oldusersnum = await getallusers();
            await addNewUser(email, '102030', 'amir', 'false')
            const newusersnum = await getallusers();

            t.equal(oldusersnum.rowCount + 1, newusersnum.rowCount, 'check if added new user')
            t.end();

        } catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with users email" + error)
            t.end();
        }


    })
})


tape("add post", t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        try {
            const oldsize = await getallposts()
            await addNewPost('11', 0, '05.05.2020', 1)
            const updatedsize = await getallposts()
            t.equal(oldsize.rowCount + 1, updatedsize.rowCount, 'check if added new post')
            t.end();
        }
        catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with users array size1" + error)
            t.end();
        }

    })
})


tape('delete posts', t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        try {
            await removepost(4)
        }
        catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with deleting post" + error)
            t.end();
        }
        db.query('SELECT * FROM posts')
            .then((post) => {
                t.equal(post.rowCount, 3, 'number of posts =equal after resolve')
                t.end()
            })
    })
})


tape('add comment to a post', t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        try {
            const oldcomments = await getcomments(1)
            await addcomment('hhhhh d7ok', 1, 1)
            const getupdatecomments = await getcomments(1)
            t.equal(oldcomments.rowCount + 1, getupdatecomments.rowCount, 'number of comments correct after adding new comment')
            t.end()

        }
        catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with adding comment" + error)
            t.end();
        }
    })
})

tape('remove all comments from post', t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        try {
            await removecomments(1)
            const getupdatecomments = await getcomments(1)
            t.equal(0, getupdatecomments.rowCount, 'number of commentsshould be =0')
            t.end()

        }
        catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with deleting comments" + error)
            t.end();
        }
    })
})

tape('remove specific comment from post', t => {
    runDbBuild(async function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        try {
            await removecomment(1)
            db.query('SELECT * FROM comments WHERE id = $1', [1])
                .then((comment) => {
                    t.equal(comment.rows.length, 0, 'delete comment success')
                    t.end();
                })
                .catch((error) => {
                    t.equal(1, 2, "error problem with deleting comment" + error)
                    t.end();
                })
        }
        catch (e) {
            console.log(e);
            t.equal(1, 2, "error problem with deleting comments" + error)
            t.end();
        }
    })
})