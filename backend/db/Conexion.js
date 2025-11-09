const {Sequelize}=require('sequelize')

const sequelize=new Sequelize(
    'ecommerce',
    'Kevin',
    'Alejandra2731**',
    {
        host:'localhost',
        port: 3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
.then(()=>console.log('Conexión exitosa...'))
.catch(erro => console.log('Ocurrió un error' +erro))

module.exports=sequelize;