const connection = require('../config/connection');
const { User, Thoughts } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing courses
  await User.deleteMany({});

  // Drop existing students
  await Thoughts.deleteMany({});


  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne({
    courseName: 'UCLA',
    inPerson: false,
    students: [...students],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(students);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
