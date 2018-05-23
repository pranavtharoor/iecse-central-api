'use strict';
module.exports = (sequelize, DataTypes) => {

	var Event = sequelize.define('event', {
		name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		startDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		audienceType: {
			type: DataTypes.STRING,
			allowNull: true
		},
		// created_by: {
		// 	type: DataTypes.STRING,
		// 	allowNull: true
		// },
		status: {
			type: DataTypes.STRING,
			allowNull: true
		},
		domain: {
			type: DataTypes.STRING,
			allowNull: true
		}
	});

  Event.associate = function(models) {
	models.event.belongsTo(models.user,{ foreignKey : 'created_by' });
	models.event.belongsTo(models.user,{ foreignKey : 'modified_by' });
    models.event.hasMany(models.eventsession);
  };

	return Event;
};



