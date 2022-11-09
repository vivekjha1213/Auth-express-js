# Auth-Express-Js

User Login And Registration Backend API :

feature 1: No duplicate user Sign up with same mail.
feature 2: Same Match Password.

Authentication Express.Js +JWT+ Mongodb

Bearer tokens enable requests to authenticate using an access key

you can test this Api via PostMan:

Here is request Body :

User  Registration Api 

{
    "name":"xxxx",
    "email":"xxxx",
    "password":"xxxxx",
    "password_confirmation":"xxxx",
    "tc":"true" // terms and conditions
}

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

User Login Api : 


{
    "email":"example@mail.com",
    "password":"xxxxxxxx"
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------

Note : The User Registration generate token..

You must Passed The token in frontend/postMan.

You can pass through Auth - Bearer Token in User Login.

The token is validation for 10 days.

You can use this project in Production too only you need to modify.
-----------------------------------------------------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------------------------------------------------
you must need these Dependencies To run this project:

 npm install express
 
 
vivek@viveks-MacBook-Air ExpressAuthJwt % ->> npm i -D nodemon

vivek@viveks-MacBook-Air ExpressAuthJwt % ->> npm i mongoose

vivek@viveks-MacBook-Air ExpressAuthJwt %->> npm i dotenv

vivek@viveks-MacBook-Air ExpressAuthJwt % ->>npm i dotenv

vivek@viveks-MacBook-Air ExpressAuthJwt %->> npm i jsonwebtoken

vivek@viveks-MacBook-Air ExpressAuthJwt % ->>npm i bcrypt

vivek@viveks-MacBook-Air ExpressAuthJwt % ->> npm i cors

Here is doc Link  Attached.

https://www.npmjs.com/package/express

----------------------------------------------------------------------------------------------------------------------------------------------------------
 For Run Development Environment ->> npm run dev / npm start
-----------------------------------------------------------------------------------------------------------------------------------------------------------
