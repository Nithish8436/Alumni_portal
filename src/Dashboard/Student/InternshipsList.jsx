import React from 'react';
import { Link } from 'react-router-dom';

const InternshipsList = ({ internships }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Link to="/studentdashboard" className="text-blue-600 hover:underline mb-4 block">
        ← Back to Dashboard
      </Link>
      <h2 className="text-2xl font-semibold mb-6 text-center">Internships</h2>
      {internships.length === 0 ? (
        <p className="text-gray-600 text-center">No internships available.</p>
      ) : (
        <div className="grid gap-4">
          {internships.map((internship) => (
            <Link
              key={internship.id}
              to={`/internship-details/${internship.id}`}
              className="block p-4 bg-white rounded-lg shadow-lg hover:bg-blue-50 transition"
            >
              <p className="font-medium">{internship.companyName} - {internship.role}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default InternshipsList;