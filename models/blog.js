const Sequelize=require('sequelize')


const sequelize=require('../util/database')

const Blog=sequelize.define('blogs',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:Sequelize.STRING,

  author:{
        type:Sequelize.STRING,
        allowNull:false
    },
    content:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Blog;
