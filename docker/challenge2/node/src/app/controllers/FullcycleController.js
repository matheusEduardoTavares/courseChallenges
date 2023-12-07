const faker = require('faker');
const UserRepository = require('../repositories/UserRepository');

class FullcycleController {
  async index(request, response) {
    try {
      const userNames = await UserRepository.findAll();

      const formattedUserNames = userNames.map((user) => `<li>${user.name}</li>`).join('');

      return response.send(`
        <h1>Full Cycle Rocks!</h1>
        <br/>
        <h2>User Names:</h2>
        <ul>
          ${formattedUserNames}
        </ul>
      `);
    } catch (error) {
      console.error("Error in FullcycleController index:", error);
      return response.status(500).send("Internal Server Error");
    }
  }

  async store(request, response) {
    try {
      const name = faker.name.firstName();

      await UserRepository.create(name);

      return request.next()
    } catch (error) {
      console.error("Error in FullcycleController store:", error);
      return response.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new FullcycleController();
