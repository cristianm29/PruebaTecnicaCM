const express = require('express');
const enrutar = express.Router();
//const enrutar_productos = require ('../Functions/Productos');
//const enrutar_cupon = require ('../Functions/Cupon');

var Cargar_productos = [
    {id: 1, name: 'Producto_1'},
    {id: 2, name: 'Producto_2'},
    {id: 3, name: 'Producto_3'},
];

var Cargar_cupon = [
    {id: 1, name: 'Cupon_1', description: 'Este es el cupon 1', product_id: 2, valid_since: '2021-03-04T00:00:00.000', valid_until: '2021-03-04T23:59:00.999'},
    {id: 2, name: 'Cupon_2', description: 'Este es el cupon 2', product_id: 3, valid_since: '2021-03-03T00:00:00.000', valid_until: '2021-03-03T23:59:00.999'},
];

function listar_pro (req, res) {
    
    res.status(200).json({ datos : Cargar_productos });
}

function Auten_Admin (req, res, next){

    let autA = req.headers.auta;

    if (autA === 'Admin'){

        next();

    } else {

        res.status(200).json({ message : 'Error 403' });
    }
}

function Auten_Customer (req, res, next){

    let autC = req.headers.autc;

    if (autC === 'Customer'){

        next();

    } else {

        res.status(200).json({ message : 'Error 403' });
    }
}

function listar_un_pro (req, res){

    res.status(200).json({ 
        datos : Cargar_productos.find(datos => datos.id === parseInt(req.params.id)) 
    });
}

function crearcupon (req, res){

    Cargar_cupon.push({

        id: Cargar_cupon.length + 1,
        name: req.body.nombre,
        description: req.body.descripcion,
        product_id: parseInt(req.body.id_producto),
        valid_since: req.body.valid_since,
        valid_until: req.body.valid_until,

    })

    res.status(200).json({
        datos : Cargar_cupon.find(datos => datos.id === parseInt(Cargar_cupon.length))
    });
   // console.log(req.body);
}

function listar_cupon (req, res) {
    
    res.status(200).json({ datos : Cargar_cupon });
}


enrutar.get('/productos', [Auten_Admin, listar_pro]);
enrutar.get('/productos/:id', [Auten_Admin, listar_un_pro]);
enrutar.post('/crearcupon', [Auten_Admin, crearcupon]);
enrutar.get('/cupones', [Auten_Admin, listar_cupon]);



module.exports = enrutar;