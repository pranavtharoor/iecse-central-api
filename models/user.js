'use strict';

module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('user',{
        memId : {
            type : DataTypes.INTEGER,
            primaryKey : true
        },
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
    }, {
        underscored: true
    });

    User.associate = (models)=>{
        
        models.user.hasMany(models.attendance);
        models.user.hasMany(models.certificate,{ foreignKey : 'member_id' });

        models.user.hasMany(models.event,{ as : 'CreatedEvents', foreignKey : 'created_by' });
        models.user.hasMany(models.event,{ as : 'ModifiedEvents', foreignKey : 'modified_by' });
        
        models.user.hasMany(models.tutorial,{ as : 'CreatedTutorials', foreignKey : 'created_by' });
        models.user.hasMany(models.tutorial,{ as : 'ModifiedTutorials', foreignKey : 'modified_by' });
    };

    return User;
};