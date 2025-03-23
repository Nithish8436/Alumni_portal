import React from 'react';
import { useParams, Link } from 'react-router-dom';

const InternshipDetails = ({ internships }) => {
  const { id } = useParams();
  const internship = internships.find((i) => i.id === Number(id));

  const handleApply = () => {
    console.log(`Applied to Internship ID: ${id}`, internship);
    
  };

  if (!internship) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Internship not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Link to="/studentdashboard" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Dashboard
        </Link>
        <h2 className="text-2xl font-semibold mb-4">{internship.companyName} - {internship.role}</h2>
        <p><strong>Date:</strong> {internship.date}</p>
        <p><strong>CTC:</strong> {internship.ctc}</p>
        <p><strong>Criteria:</strong> {internship.criteria}</p>
        <p><strong>Internship Period:</strong> {internship.internshipPeriod}</p>
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

export default InternshipDetails;