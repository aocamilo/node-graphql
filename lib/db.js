"use strict";

const { MongoClient } = require("mongodb");
const { DB_USER, DB_PASSWD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const mongoUrl = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}`;
let connection;

const connectDB = async () => {
  if (connection) return connection;

  try {
    const client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
    });
    connection = client.db(DB_NAME);
  } catch (error) {
    console.error("Error connecting to the DB", mongoUrl, error);
    process.exit(1);
  }

  return connection;
};

module.exports = connectDB;
