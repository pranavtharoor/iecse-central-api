'use strict'

module.exports = (sequelize,DataTypes)=>{
    let Tutorial = sequelize.define('tutorial',{
        title : {
            type : DataTypes.STRING(70)
        },
        body : {
            type : DataTypes.TEXT
        },
        status : {
            type : DataTypes.INTEGER
        }
    });

    Tutorial.associate = (models) => {
        models.tutorial.belongsTo(models.user,{ as : 'Creator' , foreignKey : 'created_by' });
        models.tutorial.belongsTo(models.user,{ as : 'Modifier' , foreignKey : 'modified_by' });
    };

    return Tutorial;
};