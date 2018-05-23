'use strict';

// @TODO: Change all fields to not null
module.exports = (sequelize, DataTypes) => {

	let EventSession = sequelize.define('eventsession', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		date: {
			type: DataTypes.DATE,
			allowNull: true
		},
        venue: {
			type: DataTypes.STRING,
			allowNull: true
		},
        time: {
		    type: DataTypes.TIME,
            allowNull: true
        }
	});

	EventSession.associate = (models) => {
		models.eventsession.belongsTo(models.event);
	};

	return EventSession;
};
