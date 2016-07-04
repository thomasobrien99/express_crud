const express = require('express');
const app = express();
const cities = require('./routes/cities')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.set('view engine', 'jade')


app.use('/cities', cities)

app.listen(3000, function(){
	console.log('Server listening on port 3000...')
})