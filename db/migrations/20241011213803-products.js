'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema )
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema)
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CATEGORY_TABLE)
    await queryInterface.dropTable(PRODUCT_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
