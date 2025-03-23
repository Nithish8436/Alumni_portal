import React from 'react';
import { useParams, Link } from 'react-router-dom';

const JobDetails = ({ jobPostings }) => {
  const { id } = useParams();
  const job = jobPostings.find((j) => j.id === Number(id));

  const handleApply = () => {
    console.log(`Applied to Job ID: ${id}`, job);
   
  };

  if (!job) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Job not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Link to="/studentdashboard" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Dashboard
        </Link>
        <h2 className="text-2xl font-semibold mb-4">{job.companyName} - {job.role}</h2>
        <p><strong>Date:</strong> {job.date}</p>
        <p><strong>CTC:</strong> {job.ctc}</p>
        <p><strong>Criteria:</strong> {job.criteria}</p>
        <p><strong>Applicant:</strong> {job.applicant}</p>
        <button
          onClick={handleApply}
          className="mt-6 w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobDetails;