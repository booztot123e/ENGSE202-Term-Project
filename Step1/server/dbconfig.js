var dbconfig = {
  development: {
    //connectionLimit : 10,
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "user66023_db",
  },
  production: {
    //connectionLimit : 10,
    host: "localhost",
    port: "3306",
    user: "dbuser66",
    password: "P@ssw0rd",
    database: "user66023_db",
  },
};
module.exports = dbconfig;
