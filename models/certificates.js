'use strict';

// @TODO: Change all fields to not null
module.exports = (sequelize, DataTypes) => {

    let Certificate = sequelize.define('certificate', {
        memberId: {
            type: DataTypes,
            allowNull: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        updatedAt: false
    });

    Certificate.associate = (models) => {
        models.certificate.belongsTo(models.user, {foreignKey: 'memberId'});
    };

    return Certificate;
};
