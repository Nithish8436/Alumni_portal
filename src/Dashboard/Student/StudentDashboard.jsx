import React from 'react';
import { Link } from 'react-router-dom';

const StudentDashboard = ({ jobPostings, internships, careerResources }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome to Student Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Job Postings Card */}
        <Link
          to="/job-postings-list"
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-center">Job Postings</h2>
        </Link>

        {/* Internships Card */}
        <Link
          to="/internships-list"
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-center">Internships</h2>
        </Link>

        {/* Career Resources Card */}
        <Link
          to="/career-resources-list"
          className="bg-white p-4 rounded-lg shadow-lg hover:bg-blue-50 transition"
        >
          <h2 className="text-xl font-semibold text-center">Career Resources</h2>
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;