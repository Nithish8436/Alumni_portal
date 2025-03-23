import React from 'react';
import { Link } from 'react-router-dom';

const JobPostingsList = ({ jobPostings }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/studentdashboard" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Dashboard
      </Link>
      <h2 className="text-2xl font-semibold mb-6 text-center">Job Postings</h2>
      {jobPostings.length === 0 ? (
        <p className="text-gray-600 text-center">No job postings available.</p>
      ) : (
        <div className="grid gap-4">
          {jobPostings.map((job) => (
            <Link
              key={job.id}
              to={`/job-details/${job.id}`}
              className="block p-4 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition"
            >
              <p className="font-medium">{job.companyName} - {job.role}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobPostingsList;