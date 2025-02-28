// Import Sequelize and the database configuration
const { Sequelize } = require('sequelize');
const sequelize = require('../config/db.config');

// Import all models
const User = require('./User');
const UserRole = require('./UserRole');
const GameStatus = require('./GameStatus');
const CompetitionType = require('./CompetitionType');
const Season = require('./Season');
const Stadium = require('./Stadium');
const Referee = require('./Referee');
const Club = require('./Club');
const Team = require('./Team');
const Competition = require('./Competition');
const Player = require('./Player');
const Contract = require('./Contract');
const Staff = require('./Staff');
const StaffAssignment = require('./StaffAssignment');
const Game = require('./Game');
const Goal = require('./Goal');
const Substitution = require('./Substitution');
const Booking = require('./Booking');
const GameEvent = require('./GameEvent');
const PlayerStatistics = require('./PlayerStatistics');
const TeamStatistics = require('./TeamStatistics');
const LeagueTable = require('./LeagueTable');

// Initialize models with the Sequelize instance
User.init(sequelize);
UserRole.init(sequelize);
GameStatus.init(sequelize);
CompetitionType.init(sequelize);
Season.init(sequelize);
Stadium.init(sequelize);
Referee.init(sequelize);
Club.init(sequelize);
Team.init(sequelize);
Competition.init(sequelize);
Player.init(sequelize);
Contract.init(sequelize);
Staff.init(sequelize);
StaffAssignment.init(sequelize);
Game.init(sequelize);
Goal.init(sequelize);
Substitution.init(sequelize);
Booking.init(sequelize);
GameEvent.init(sequelize);
PlayerStatistics.init(sequelize);
TeamStatistics.init(sequelize);
LeagueTable.init(sequelize);

// Define associations (if any)
// Example: User.hasMany(Post);
// Example: Post.belongsTo(User);

// Export models and sequelize instance
module.exports = {
    sequelize,
    User,
    UserRole,
    GameStatus,
    CompetitionType,
    Season,
    Stadium,
    Referee,
    Club,
    Team,
    Competition,
    Player,
    Contract,
    Staff,
    StaffAssignment,
    Game,
    Goal,
    Substitution,
    Booking,
    GameEvent,
    PlayerStatistics,
    TeamStatistics,
    LeagueTable
};