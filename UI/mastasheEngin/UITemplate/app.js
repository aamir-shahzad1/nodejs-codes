const mastacheExpress = require('mustache-express')
const express = require('express');
const app = express();

app.engine('html', mastacheExpress())

app.set('view engine', 'html')

app.set('views', __dirname+'/src/views')


  //page routers
  const pageRouter = require('./server/routers/pageRouters');
  
  app.use('/',pageRouter)
  
  app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
  });

