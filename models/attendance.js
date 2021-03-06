'use strict';

// @TODO: Change all fields to not null
module.exports = (sequelize, DataTypes) => {

    let Attendance = sequelize.define('attendance', {}, {
        updatedAt: false,
        underscored: true
    });

    Attendance.associate = (models) => {
        models.attendance.belongsTo(models.event);
        models.attendance.belongsTo(models.eventsession);
        models.attendance.belongsTo(models.user);
    };

    return Attendance;
};
