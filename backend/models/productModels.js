import db from '../config/database.js';

// Get all courses
export const getCourses = (result) => {
    db.query('SELECT * FROM Course', (err, results) => {
      if (err) {
        console.error(err);
        result(err, null);
      };

      result(null, results);
    })
}

// Insert course to Database
export const insertCourse = (data, result) => {
    db.query('INSERT INTO Course SET ?', [data], (err, results) => {
      if (err) {
        console.error(err);
        result(err, null);
      };

      result(null, results);
    })
}