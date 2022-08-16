const connectDB = require("./db");
const { ObjectID } = require("mongodb");

const mutations = require("./mutation");

let db;

module.exports = {
  Query: {
    getCourses: async () => {
      let courses = [];
      try {
        db = await connectDB();
        courses = await db.collection("certificates").find().toArray();
      } catch (error) {
        console.log("Error", error);
      }

      return courses;
    },
    getCourse: async (root, { id }) => {
      let course = {};
      try {
        db = await connectDB();
        course = await db
          .collection("certificates")
          .findOne({ _id: ObjectID(id) });
      } catch (error) {
        console.log("Error", error);
      }
      return course;
    },
  },
  Mutation: mutations,
};

// Query to get all courses
// {
//   getCourses {
//     _id
//     img
//   }
// }

// Query to get course
// {
//   getCourse(id: "anyid") {
//     _id
//     img
//   }
// }
