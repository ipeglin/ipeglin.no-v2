import db from '../config/database.js';

// Get all courses
export const getAuthenticationDetails = (result) => {
    db.query('SELECT * FROM Authentication', (err, results) => {
      if (err) {
        console.error(err);
        result(err, null);
      };

      result(null, results);
    })
}

// Insert course to Database
export const updateAuthenticationDetails = (data, result) => {
    db.query('UPDATE Authentication SET password = ? WHERE user_id = ?', [data.password, data.user_id], (err, results) => {
      if (err) {
        console.error(err);
        result(err, null);
      };

      result(null, results);
    })
}