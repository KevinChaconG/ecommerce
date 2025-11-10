const express=require('express')
const Producto = require('./Modelos/Producto')
const Carrito = require('./Modelos/Carrito')
var cors=require('cors')

const app=express()

app.use(cors())
app.use(express.json())

app.get('/producto', async(req, resp) =>{
    try {

        const listaProducto= await Producto.findAll();

        if(listaProducto.length > 0)
            resp.status(200).json(listaProducto)
        else
            resp.status(200).json({'mensaje':'Sin datos para mostrar'})
        
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error con la petición'+error})
    }
});

app.post('/producto', async(req, resp) =>{
    try {

        console.log(req.body);

        const producto= await Producto.create(req.body)
        resp.status(200).json({'menaje': 'Producto agregado con exito'})
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error al insertar'+error})
        
    }

})

app.put('/producto/:id', async (req, resp) =>{

    try {

        const idProducto= req.params.id;

        const[updated]=await Producto.update(req.body, {
            where: {id:idProducto}
        })

        if(updated)
            resp.status(200).json({mensaje: 'Registro actualizado'})

        else
            resp.status(400)({mensaje: 'No se encontró el registro para actualizar'})
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error al actualizar'+error})
    }

})

app.delete('/producto/:id', async(req, resp) =>{

    try {

        const idProducto=req.params.id;

        const deleted=await Producto.destroy({
            where: {id:idProducto}
        })

        if (deleted)
            resp.status(200).json({mensaje: 'Eliminado correctamente'})
        else
            resp.status(400)({mensaje: 'No se encontró el registro para eliminar'})
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error al eliminar'+error})
        
    }
}) 

app.post('/carrito', async (req, resp) => {
  try {
    const { productoId } = req.body;
    if (!productoId) {
      return resp.status(400).json({ mensaje: 'Id del producto es requerido' });
    }

    const prod = await Producto.findByPk(productoId);
    if (!prod) return resp.status(404).json({ mensaje: 'Producto no existe' });

    const item = await Carrito.create({
      productoId: prod.id,
      nombreProducto: prod.nombreProducto,
      precioProducto: prod.precioProducto,
      isvProducto: prod.isvProducto,
      imagenProducto: prod.imagenProducto
    });

    return resp.status(201).json({ mensaje: 'Producto agregado al carrito', item });
  } catch (error) {
    return resp.status(500).json({ error: 'Ocurrió un error al insertar: ' + error });
  }
});

app.get('/carrito', async(req, resp) =>{
    try {

        const itemsCarrito= await Carrito.findAll();

        if(itemsCarrito.length > 0)
            resp.status(200).json(itemsCarrito)
        else
            resp.status(200).json({'mensaje':'Sin datos para mostrar'})
        
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error con la petición'+error})
    }
});

app.delete('/carrito/:id', async(req, resp) =>{

    try {

        const idCarrito=req.params.id;

        const deleted=await Carrito.destroy({
            where: {id:idCarrito}
        })

        if (deleted)
            resp.status(200).json({mensaje: 'Producto eliminado del carrito'})
        else
            resp.status(400)({mensaje: 'No se encontró el registro para eliminar'})
        
    } catch (error) {
        resp.status(500).json({'error': 'Ocurrió un error al eliminar'+error})
        
    }
}) 

app.listen(5050,()=>{
    console.log('Aplicacion ejecutando en puerto 5050')
})