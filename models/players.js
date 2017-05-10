module.exports = function(sequelize, DataTypes) {
 var Player = sequelize.define("Player", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
   playerName: {
     type: DataTypes.STRING,
     allowNull: false,
     validate: {
       len: [1, 140]
     }
   },
   password: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
           len: [1, 140]
       }
   },
   simonHiScore: {
     type: DataTypes.INTEGER,
     allowNull: false,
     defaultValue: 0
   },
   pogNumOfWins: {
       type: DataTypes.INTEGER,
       allowNull: false,
       defaultValue: 0
   },
   blackJackHiScore: {
       type: DataTypes.INTEGER,
       allowNull: false,
       defaultValue: 0
   },
   rpsNumOfWins: {
       type: DataTypes.INTEGER,
       allowNull: false,
       defaultValue: 0
   }
 });
 return Player;
};