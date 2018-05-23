'use strict';

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user',{
        name : {
            type : DataTypes.STRING(70)
        },
        email : {
            type : DataTypes.STRING,
            validate : {
                isEmail : true
            }
        },
        password : {
            type : DataTypes.STRING
        },
        salt : {
            type : DataTypes.STRING
        },
        type : {
            type : DataTypes.INTEGER
        },
        status : {
            type : DataTypes.INTEGER
        }
    });

    User.associate = (models)=>{
        models.user.hasMany(models.tutorial,{ foreignKey : 'created_by' });
        models.user.hasMany(models.tutorial,{ foreignKey : 'modified_by' });
        models.user.hasMany(models.event,{ foreignKey : 'created_by' });
        models.user.hasMany(models.event,{ foreignKey : 'modified_by' });
    };

    return User;
};