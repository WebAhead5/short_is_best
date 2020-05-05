const runDbBuild = require("./db_build");//not clear
const sqlFuncs = require("./queries");
const tape = require("tape");


//=======================
tape("tape is working", t => {
    t.equals(1, 1, "one equals one");
    t.end();
});


//===========================================
tape("get user name by  id ", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        sqlFuncs.getusername(2, (err, result) => {
            if (err) console.log(err);
            const expected =
            [{
                 name: 'farid'
              }]
        t.deepEqual(result, expected, "Returns expected user name");
        t.end();

    }
        )
    })})
//=========================================
    tape("get all posts ", t => {
        runDbBuild(function (err, res) {
            t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
            sqlFuncs.getposts((err, result) => {
                if (err) console.log(err);
                const expected =
                [
                    {
                      postid: 1,
                      content: 'keep things short',
                      likes: 3,
                      postdate: new Date('2019-02-05T00:00:00 GMT'),
                      userid: 1
                    },
                    {
                      postid: 2,
                      content: 'im addicted to Cola',
                      likes: 1,
                      postdate: new Date('2019-01-03T00:00:00 GMT'),
                      userid: 2
                    },
                    {
                      postid: 3,
                      content: 'have a nice day',
                      likes: 2,
                      postdate: new Date('2019-01-09T00:00:00 GMT'),
                      userid: 3
                    }
                  ]
            t.deepEqual(result, expected, "get all  posts ");
            t.end();
    
        }
            )
        })
    })
//=========================================

tape("get comments for postid ", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        sqlFuncs.getcomments(1,(err, result) => {
            console.log(result);
            if (err) console.log(err);
            const expected =[{ id: 1, content: 'hhhhhhh', postid: 1, userid: 2 }]
            t.deepEqual(result, expected, "getting all comments a by postid ");
            t.end();
        })
    })
});

//===============
/*
tape("addpost ", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        sqlFuncs.addpost("iam in love with f.b",'10.1.1994',2,(err, result) => {
            console.log(result);
            if (err) console.log(err);
            const expected =[{ id: 2, content: "iam in love with f.b" , postdate: '10.1.1994'}]
            t.deepEqual(result, expected, "all comments removed by postid ");
            t.end();
        })
    })
});
*/
//add comment
//add user




//====================
//remove comments

tape("remove post ", t => {
    runDbBuild(function (err, res) {
        t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
        sqlFuncs.removepost(2, (err, result) => {
            if (err) console.log(err);
            const expected =
            []
        t.deepEqual(result, expected, "Returns expected user name");
        t.end();

    }
        )
    })})



    tape("remove comment  ", t => {
        runDbBuild(function (err, res) {
            t.error(err, "No Error in DB creation"); //Assert that db_build finished successfully with no errors
            sqlFuncs.removecomment(1, (err, result) => {
                if (err) console.log(err);
                const expected =[]
            t.deepEqual(result, expected, "Returns expected user name");
            t.end();
    
        } )
        })});
    









