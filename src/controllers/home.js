const jwt = require('jsonwebtoken');
const tweet = [{
        postid: 1,
        name: 'James',
        handle: '@jokerjames',
        img: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
        content: "If you don't succeed, dust yourself off and try again.",
        likes: 10,
        postdate: "20-01-2010"

    },
    {

        postid: 2,
        name: 'Fatima',
        handle: '@fantasticfatima',
        img: 'https://semantic-ui.com/images/avatar2/large/molly.png',
        tweet: 'Better late than never but never late is better.',
        likes: 12,
    },
    {
        id: 3,
        name: 'Xin',
        handle: '@xeroxin',
        img: 'https://semantic-ui.com/images/avatar2/large/elyse.png',
        tweet: 'Beauty in the struggle, ugliness in the success.',
        likes: 18,
    }
]


const comments = [{
        id: 1,
        content: 'James',
        postid: 1,
        userid: 1
    },
    {
        id: 2,
        content: 'James',
        postid: 1,
        userid: 1
    },
    {
        id: 2,
        content: 'James',
        postid: 3,
        userid: 1
    }
]

exports.get = (req, res) => {
    if (res.locals.user) {
        res.render('home', { activePage: { home: true }, signedIn: true, tweet: tweet, username: res.locals.user });
    } else {
        res.render('home', { activePage: { home: true }, signedIn: true, tweet: tweet });
    }

};