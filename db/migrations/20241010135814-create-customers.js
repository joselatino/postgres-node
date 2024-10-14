'use strict';

const { CUSTOMER_TABLE, Customer, CustomerSchema } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CUSTOMER_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
