const mysql = require('mysql');

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const query = async (sql, values) => {
  let connection = mysql.createConnection(config);

  try {
    const result = await new Promise((resolve, reject) => {
      connection.query(sql, values, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });

    return result;
  } finally {
    connection.end();
  }
};

query(`
  CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name varchar(100),
    PRIMARY KEY (id)
  )
`);

module.exports = query;
