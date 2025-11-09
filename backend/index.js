const express=require('express')
const Producto = require('./Modelos/Producto')
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

app.listen(5050,()=>{
    console.log('Aplicacion ejecutando en puerto 5050')
})