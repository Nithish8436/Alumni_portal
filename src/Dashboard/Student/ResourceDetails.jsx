import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ResourceDetails = ({ careerResources }) => {
  const { id } = useParams();
  const resource = careerResources.find((r) => r.id === Number(id));

  if (!resource) return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Resource not found.</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Link to="/studentdashboard" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Dashboard
        </Link>
        <h2 className="text-2xl font-semibold mb-4">Career Resource</h2>
        <p><strong>Document Name:</strong> {resource.documentName}</p>
        <p><strong>Document File:</strong> {resource.documentFile || 'Not uploaded'}</p>
        <p><strong>Video Name:</strong> {resource.videoName}</p>
        <p><strong>Video File:</strong> {resource.videoFile || 'Not uploaded'}</p>
      </div>
    </div>
  );
};

export default ResourceDetails;