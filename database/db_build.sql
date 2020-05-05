BEGIN;
DROP TABLE IF EXISTS users, Posts, Comments CASCADE;

CREATE TABLE users (
userid SERIAL PRIMARY KEY,
email VARCHAR (30)  UNIQUE NOT NULL,
password VARCHAR (200) NOT NULL,
name VARCHAR (30)  NOT NULL,
admin boolean NOT NULL
);




CREATE TABLE Posts (
postid SERIAL PRIMARY KEY,
content VARCHAR (140)   NOT NULL,
likes INTEGER   NOT NULL,
postdate DATE  NOT NULL,
userid INTEGER NOT NULL
);

CREATE TABLE Comments (
id SERIAL PRIMARY KEY,
content VARCHAR (20)   NOT NULL,
postid INTEGER NOT NULL,
userid INTEGER NOT NULL

);




insert into users (email, password, name, admin) values ('amirfahoum@gmail.com','102030', 'Amir', 'false');
insert into users (email, password, name, admin) values ('farid@gmail.com','102030', 'farid', 'true');
insert into users (email, password, name, admin) values ('hadi@gmail.com','102030', 'hadi', 'true');


insert into Posts (content, likes,  postdate,userid) values ('keep things short', 3,'5/2/2019 ', 1);
insert into Posts (content, likes,  postdate,userid) values ('im addicted to Cola', 1, '1/3/2019', 2);
insert into Posts (content, likes,  postdate,userid) values ('have a nice day', 2, '1/9/2019', 3);


-- insert into Comments (content, postid,userid) values ('nice job',1,3);
insert into Comments (content, postid,userid) values ('hhhhhhh',1,2);



COMMIT;
