import db from '../config/database.js';

// Get all experiences
export const getExperiences = (result) => {
  // db.query('SELECT * FROM Course', (err, results) => {
  //   if (err) {
  //     console.error(err);
  //     result(err, null);
  //   };

  //   result(null, results);
  // })
  db.collection('experiences').get()
  .then(courses => result(null, courses));
}