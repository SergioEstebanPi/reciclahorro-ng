//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
//app.use(express.static(__dirname + '/dist/reciclahorro-ng'));
app.use(express.static(path.join(__dirname,'/dist/reciclahorro-ng')));
 //app.use(express.static(path.join(__dirname, '/movies-client/dist')));
app.get('/*', function(req,res) {
    
res.sendFile(path.join(path.join(__dirname,'/dist/reciclahorro-ng/index.html')));
});
//app.use(express.static(path.join(__dirname, '/movies-client/dist/movies-client')));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);