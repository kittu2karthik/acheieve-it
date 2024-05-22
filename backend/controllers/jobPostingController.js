// controllers/jobPostingController.js

const JobPosting = require("../models/jobPostingModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

// GET all job postings
exports.getAllJobPostings = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(JobPosting.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const jobPostings = await features.query;

  res.status(200).json({
    status: "success",
    results: jobPostings.length,
    data: {
      jobPostings,
    },
  });
});

// GET a single job posting by ID
exports.getJobPostingById = catchAsync(async (req, res, next) => {
  const jobPosting = await JobPosting.findById(req.params.id);
  if (!jobPosting) {
    return next(new AppError("Job posting not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      jobPosting,
    },
  });
});

// POST a new job posting
exports.createJobPosting = catchAsync(async (req, res, next) => {
  const jobPosting = new JobPosting({
    jobTitle: req.body.jobTitle,
    description: req.body.description,
    keySkills: req.body.keySkills,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    location: req.body.location,
    positionType: req.body.positionType,
  });
  console.log(`this is jobposting`);
  console.log(jobPosting);

  const newJobPosting = await JobPosting.create(jobPosting);

  console.log(`this is newjobposting`);
  console.log(newJobPosting);

  res.status(201).json({
    status: "success",
    data: {
      tour: newJobPosting,
    },
  });
});

// PUT update a job posting
exports.updateJobPosting = catchAsync(async (req, res, next) => {
  const jobPosting = await JobPosting.findById(req.params.id);

  console.log(req.params);

  if (!jobPosting) {
    return next(new AppError("Job posting not found", 404));
  }

  jobPosting.jobTitle = req.body.jobTitle;
  jobPosting.description = req.body.description;
  jobPosting.keySkills = req.body.keySkills;
  jobPosting.startDate = req.body.startDate;
  jobPosting.endDate = req.body.endDate;
  jobPosting.location = req.body.location;
  jobPosting.positionType = req.body.positionType;

  const updatedJobPosting = await jobPosting.save();
  res.status(200).json({
    status: "success",
    data: {
      updatedJobPosting,
    },
  });
});

// DELETE a job posting
exports.deleteJobPosting = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  console.log(`hello `);

  const job = await JobPosting.findByIdAndDelete(req.params.id);

  if (!job) {
    return res.status(404).json({
      status: "fail",
      message: "No job found with that ID",
    });
  }

  res.status(204).json({
    status: "success",
    message: "You have deleted",
  });
});
