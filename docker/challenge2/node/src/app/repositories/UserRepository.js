const query = require('../../database');

class UserRepository {
  async findAll() {
    try {
      const rows = await query(`
        SELECT name FROM people;
      `);

      console.dir(rows, { depth:100 })

      return rows;
    } catch (error) {
      console.error("Error in findAll query:", error);
      throw error;
    }
  }

  async create(name) {
    try {
      await query(`
        INSERT INTO people (name) VALUES ('${name}')
      `);
    } catch (error) {
      console.error("Error in create query:", error);
      throw error;
    }
  }
}

module.exports = new UserRepository();