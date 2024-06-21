// routes/jobPostingRoutes.js

const express = require("express");
const jobPostingController = require("./../controllers/jobPostingController");
// const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(jobPostingController.getAllJobPostings)
  .post(jobPostingController.createJobPosting);

router
  .route("/:id")
  .get(jobPostingController.getJobPostingById)
  .put(jobPostingController.updateJobPosting)
  .delete(jobPostingController.deleteJobPosting);
// authController.restrictTo("admin"),

module.exports = router;
