import { getCourses } from '../models/productModels';

// Get all courses
export const showCourses = (req, res) => {
  getCourses((err, results) => {
    if (err) res.send(err);

    res.json(results);
  });
}