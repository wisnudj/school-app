'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Subject.associate = (model) => {
    Subject.hasMany(model.Teacher);
    Subject.belongsToMany(model.Student, {through: 'SubjectStudent'})
    Subject.hasMany(model.SubjectStudent)
  }
  return Subject;
};
