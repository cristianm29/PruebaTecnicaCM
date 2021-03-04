const express = require('express');
const body_parser = require('body-parser');
const app_ser = express();

//Server
app_ser.set('port', process.env.PORT || 3000);

app_ser.listen(app_ser.get('port'), function() {
    console.log('servidor en el puerto', app_ser.get('port'))
});