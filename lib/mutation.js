"use strict";

const connectDB = require("./db");

let db;

module.exports = {
  createCourse: async (root, { input }) => {
    try {
      db = await connectDB();
      const course = await db.collection("certificates").insertOne(input);
      input._id = course.insertedId;

      return input;
    } catch (error) {
      console.log(error);
    }
  },
};

// mutation{
//   createCourse(input: {
//     title: "Example Course"
//     description: "optional desc"
//     img:"www.google.com"
//   }){
//     _id
//     title
//   }
// }
