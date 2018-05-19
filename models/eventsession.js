'use strict';
module.exports = (sequelize, DataTypes) => {

	var EventSession = sequelize.define('eventsession', {
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
		}
	});

	EventSession.associate = (models) => {
		models.eventsession.belongsTo(models.event);
	};

	return EventSession;
};