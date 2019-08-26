module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('users', 'avatar_id', {
    type: Sequelize.INTEGER,
    references: {
      model: 'files',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    alllowNull: true,
  }),

  down: (queryInterface) => queryInterface.removeColumn('users', 'avatar_id'),
};
