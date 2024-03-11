import express from "express";
import { db } from "../../db.js";

const router = express.Router();
router.post("/api/submit", (req, res) => {
    const formData = req.body;
  
    const sql = 'INSERT INTO survey_data SET ?';
    db.query(sql, formData, (err, result) => {
      if (err) {
        console.error('Error inserting survey data:', err);
        res.status(500).send('Error inserting survey data');
        return;
      }
      console.log('Survey data inserted:', result);
      res.status(200).send('Survey data inserted successfully');
    });
  });

export { router };