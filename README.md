# short_is_best


A project for twiting...:seedling:

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

-delete twits



<b>Website design<b>:
the website contain 3 pages:
	
**register page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-27.png)

**login page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-24.png)
**home page:
 ![](https://github.com/WebAhead5/short_is_best/blob/amirBranch/Design/Screenshot%20from%202020-05-06%2020-41-17.png)


<b>DataBase<b>

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


