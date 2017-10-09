'use strict';
const scoreletter = require('../helper/scoreletter')
module.exports = (sequelize, DataTypes) => {
  var SubjectStudent = sequelize.define('SubjectStudent', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  SubjectStudent.associate = model => {
    SubjectStudent.belongsTo(model.Subject)
    SubjectStudent.belongsTo(model.Student)
  }

  SubjectStudent.prototype.getscoreletter = function () {
    return scoreletter(this.score)
  }

  return SubjectStudent;
};
