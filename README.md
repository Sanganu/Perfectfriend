# Perfectfriend
Friend finder application

Developed by : Sangeetha

Week 13: Friend Finder application published on heroku
URL : https://murmuring-ravine-46753.herokuapp.com/
The FriendFinder application using MySQL, Express

Application:

Finds the perfect friend. The User Answers Survey questions on the scale of 1-5 with 1 beign 'Hate it' and 5 being 'Love it'. The Application finds the friend with closet match.The user answers the questions. Based on it the best match is displayed.
If the user leaves the name and the photo url link blank they are assigned as default users and "no image available - Image".
The Best match is displayed using the modal concept.

Programming Details :

The server.js - has the setting for expres, bodyparser, path.
The survey.html - has the JS script tag handlig the logic for finding the Friend. The ajax calls to handle data(corresponding logic of apiroutes.js)
The apiroutes.js - has the routes for all data. Get and post calls handle userData JSON object array which is stored in firends.js file.
The home.html is the landing page. Which takes to survey.html from the click of a button The htmlroutes.js  for url, server side path conversion.
