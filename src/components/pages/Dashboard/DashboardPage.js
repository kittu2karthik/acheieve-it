import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./DashboardPage.css";

const DashboardPage = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: "",
    description: "",
    keySkills: "",
    startDate: "",
    endDate: "",
    location: "",
    positionType: "Permenant",
  });

  useEffect(() => {
    fetchJobs();
  }, [formData]);

  const fetchJobs = async () => {
    setIsLoading(true);
    try {
      const token = Cookies.get("accessToken");
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };

      const response = await fetch(
        "http://localhost:3000/api/v1/job-postings",
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        const data = await response.json();
        setJobs(data.data.jobPostings);
      } else {
        setError("Failed to fetch jobs data");
      }
    } catch (error) {
      setError("Error fetching jobs data:", error.message);
    }
    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get("accessToken");
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/job-postings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        fetchJobs();
      } else {
        setError("Failed to create job");
      }
    } catch (error) {
      setError("Error creating job:", error.message);
    }
  };

  const handleDeleteJob = async (id) => {
    const token = Cookies.get("accessToken");

    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/v1/job-postings/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        setJobs(jobs.filter((job) => job.id !== id));
        setFormData({
          jobTitle: "",
          description: "",
          keySkills: "",
          startDate: "",
          endDate: "",
          location: "",
          positionType: "Permanent",
        }); // Clear form fields
      } else {
        setError("Failed to delete job");
      }
    } catch (error) {
      setError("Error deleting job:", error.message);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard - Admin Panel</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="job-form" onSubmit={handleSubmit}>
        <label className="form-label">
          Job Title:
          <input
            className="form-input"
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          Description:
          <textarea
            className="form-input"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          Key Skills:
          <input
            className="form-input"
            type="text"
            name="keySkills"
            value={formData.keySkills}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          Start Date:
          <input
            className="form-input"
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          End Date:
          <input
            className="form-input"
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          Location:
          <input
            className="form-input"
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="form-label">
          Position Type:
          <select
            className="form-input"
            name="positionType"
            value={formData.positionType}
            onChange={handleInputChange}
            required
          >
            <option value="Permanent">Permanent</option>
            <option value="Contract">Contract</option>
          </select>
        </label>
        <button className="submit-button" type="submit">
          Add Job
        </button>
      </form>
      <button
        className="refresh-button"
        onClick={fetchJobs}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Refresh Jobs"}
      </button>

      {/* JOB LISTS  */}
      <ul className="job-list">
        {jobs &&
          Array.isArray(jobs) &&
          jobs.map((job) => (
            <li key={job._id} className="job-item">
              <div>
                <h3 className="job-title">{job.jobTitle}</h3>
                <p className="job-description">{job.description}</p>
                <p className="job-location">Location: {job.location}</p>
                <p className="job-dates">
                  Start Date: {job.startDate}, End Date: {job.endDate}
                </p>
                <p className="job-skills">
                  Key Skills: {job.keySkills.join(", ")}
                </p>
                <p className="job-position-type">
                  Position Type: {job.positionType}
                </p>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteJob(job._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DashboardPage;
