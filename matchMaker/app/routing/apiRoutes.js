var userData = require('../data/friends.js');
var html = "";

module.exports = function(app) //app referes to express in server.js file
{
  app.get('/api/friends',function(req,res)
  {
     console.log('API call',userData);
     res.json(userData);
   });
   app.get('/api/friendslist',function(req,res)
    {

          var friendobject = JSON.stringify(userData,null,2);
          for(var i = 0; i < userData.length ; i++)
          {
            html = html+`<h4>Name: ${userData[i].name}</h4>`+
                  `<p>Image url: ${userData[i].photo}</p>`+
                  `<p>Scores : [${userData[i].score1},${userData[i].score2},
                  ${userData[i].score3},${userData[i].score4},${userData[i].score5}
                  ${userData[i].score6},${userData[i].score7},${userData[i].score8}
                  ${userData[i].score9},${userData[i].score10} ]</p><br />` ;
          }
           res.send(html);
           html = "";
     });
    app.post('/api/friends',function(req,res)
    {
      userData.push(req.body);
      res.json(true);
      console.log('Added new uer',req.body);
    });
}
