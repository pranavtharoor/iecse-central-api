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
		start_date: {
			type: DataTypes.DATE,
			allowNull: true
		},
        end_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
		audience_type: {
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
        updatedAt: false,
        underscored: true
    });

    Event.associate = function(models) {
        models.event.hasMany(models.attendance);
        models.event.hasMany(models.certificate, {foreignKey: "event_id"});

        models.event.hasMany(models.eventsession);
        
        models.event.belongsTo(models.user,{ as : 'CreatedEvents', foreignKey : 'created_by' });
        models.event.belongsTo(models.user,{ as : 'ModifiedEvents', foreignKey : 'modified_by' });
    };


	return Event;
};
