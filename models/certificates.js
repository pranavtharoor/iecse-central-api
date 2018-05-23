'use strict';

// @TODO: Change all fields to not null
module.exports = (sequelize, DataTypes) => {

    let Certificate = sequelize.define('certificate', {
        member_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        updatedAt: false,
        underscored: true
    });

    Certificate.associate = (models) => {
        models.certificate.belongsTo(models.user, {foreignKey: 'member_id'});
        models.certificate.belongsTo(models.event, {foreignKey: 'event_id'});
    };

    return Certificate;
};
