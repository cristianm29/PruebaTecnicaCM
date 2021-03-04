const express = require('express');
const body_parser = require('body-parser');
const app_ser = express();
const routes = require('./Routes/indice');


//Servidor
app_ser.set('port', process.env.PORT || 3000);

app_ser.use(routes);

app_ser.use(function (req, res, next)  {
    console.log(`${req.url} -${req.method}`);
    next();
});
app_ser.use(body_parser.json());
app_ser.use(body_parser.urlencoded({extended: false}));

app_ser.listen(app_ser.get('port'), function() {
    console.log('servidor en el puerto', app_ser.get('port'))
});



//Rutas


/*

*/