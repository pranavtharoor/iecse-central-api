'use strict';

// @TODO: Change all fields to not null
module.exports = (sequelize, DataTypes) => {

	let Event = sequelize.define('event', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
        details: {
            type: DataTypes.STRING,
            allowNull: true
        },
		startDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
        endDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
		audienceType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true
		}
    }, {
        updatedAt: false
    });

    Event.associate = function(models) {
        models.event.belongsTo(models.user,{ foreignKey : 'created_by' });
        models.event.belongsTo(models.user,{ foreignKey : 'modified_by' });
        models.event.hasMany(models.eventsession);
        models.event.hasMany(models.attendance);
    };


	return Event;
};
