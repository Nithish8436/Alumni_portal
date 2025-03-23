import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CareerResources = ({ setCareerResources }) => {
  const [documentName, setDocumentName] = useState('');
  const [documentFile, setDocumentFile] = useState(null);
  const [videoName, setVideoName] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    setDocumentFile(file);
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
  };

  const handleSave = (e) => {
    e.preventDefault();
    const resourceData = {
      documentName,
      documentFile: documentFile ? documentFile.name : null,
      videoName,
      videoFile: videoFile ? videoFile.name : null,
      id: Date.now(),
    };
    setCareerResources((prev) => [...prev, resourceData]);
    setDocumentName('');
    setDocumentFile(null);
    setVideoName('');
    setVideoFile(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <Link to="/alumnidashboard" className="text-blue-600 hover:underline mb-4 block">
          ← Back to Dashboard
        </Link>
        <h2 className="text-2xl font-semibold mb-4">Add Career Resources</h2>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Document Name:</label>
            <input
              type="text"
              value={documentName}
              onChange={(e) => setDocumentName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Upload Document:</label>
            <input
              type="file"
              onChange={handleDocumentUpload}
              className="w-full p-2 border rounded"
              accept=".pdf,.doc,.docx"
            />
            {documentFile && <p className="text-sm text-gray-600 mt-1">Selected: {documentFile.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Video Name:</label>
            <input
              type="text"
              value={videoName}
              onChange={(e) => setVideoName(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Upload Video:</label>
            <input
              type="file"
              onChange={handleVideoUpload}
              className="w-full p-2 border rounded"
              accept=".mp4,.mov,.avi"
            />
            {videoFile && <p className="text-sm text-gray-600 mt-1">Selected: {videoFile.name}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default CareerResources;