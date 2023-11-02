const Sequelize=require('sequelize')
const sequelize=require('../util/database')



const Comment=sequelize.define('comments',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    // blogId:{
    //     type:Sequelize.INTEGER,
    //     allowNull:false
    // },
    comment:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
// Comment.belongsTo(Blog, { foreignKey: 'blogId' });

module.exports=Comment