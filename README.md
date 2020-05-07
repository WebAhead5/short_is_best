# short_is_best

Our project is a kind of twitter that limit user to twite once a day.

<b>Content<b> :
- Website Design
 
- Database Design

- Server Design

<b>Login<b> :
1) create new user on Register page.

2) log in with your new account:)	
  
<b>User Story<b>
As a member of short_is_best :

-add twits/post

-view all posts/twits

-add comment on twits

-delete my twits



<b>Website design<b>:
UI contain 3 pages:
	
**register page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-27.png)

**login page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-24.png)
**home page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-17.png)

<b>Server design<b><br>
In the basic design we save the MVC model so we have three basic libraries<br>
	* Views<br>
	* Controllers<br>
	* Models<br>
	
In Addition we have meidlwares<br>
The server is express app that uses expresshandelpars.<br>
The login is cookeis passed.<br>
Passwords encrypted by bcrypt.<br>
Cookeies signed by jwt.<br>
Tests written for the models only<br> 

<b>DataBase design<b>

Schema:
```
Table 1: Users
	- id
	- userid
	- email
	- password
	- name
	- admin
	-------------------------

Table 2: posts
	- postid
	- content
	- likes
	- postdate
	- userid
	-------------------------
  

Table 3: comments
	- id
	- content
	- postid
	- userid

	-------------------------


