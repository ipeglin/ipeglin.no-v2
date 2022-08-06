import { getCourses, insertCourse } from '../models/productModels.js';

// Get all courses
export const showCourses = (req, res) => {
  getCourses((err, results) => {
    if (err) res.send(err);

    res.json(results);
  });
}

// Create new course
export const createCourse = (req, res) => {
  const data = req.body;
  insertCourse(data, (err, results) => {
    if (err) res.send(err);

    res.json(results);
  })
}