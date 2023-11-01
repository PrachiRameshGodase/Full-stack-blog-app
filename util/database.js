const Sequelize=require('sequelize')

const sequelize=new Sequelize('create-blog','root','Prachi@123',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize