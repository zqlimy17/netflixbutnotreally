# GAProject3: [SMDb](https://netflixbutnotreally.herokuapp.com/)

![Screenshot of SMDb](https://raw.githubusercontent.com/zqlimy17/netflixbutnotreally/master/public/img/smdb%20cover.png)

## About the App

**SMDb** is a MERN API that allows users to search for movies and save them as favourites. SMDb heavily relies on *The Movie Database (__TMDb__)* for information. 

## MVC
SMDb backend revolves around the `User.js` model and the `movies.js` controller while the frontend View is built on React. 

Whenever a User "likes" a movie, the movie ID will be stored in the User model. This model will be the root source of getting information from TMDb's API to populate content on the Views. 

The `movies.js` controller controls liking or un-liking a movie. 

The app can work without a current User.  

## Technologies and Resources
* MongoDb, Express.js, React, Node.js.
* TMDb API.
* Dependecies: React Router DOM, Babel, Bootstrap, Font Awesome, bcrypt.js, Mongoose, express-sessions, express-static.
* Deployed on Heroku with mLabs.

## More To Do
- Integrate IMDb (OMDb) and RapidAPI for more information. 
- Increase results limit.
- Browsing by Genres. 
- TV Series section. 
- Advanced Search. 
- Sorting/Filtering Results. 
