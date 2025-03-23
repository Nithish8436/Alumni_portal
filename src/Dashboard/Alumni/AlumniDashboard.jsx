import React from "react";
import { Link } from "react-router-dom";

const AlumniDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* 🔹 Top Navbar-Style Menu */}
      <nav className="bg-blue-900 text-white py-4 shadow-lg">
        <div className="flex justify-center space-x-16">
          {/* 🟦 Alumni Engagement */}
          <div className="relative group">
            <button className="px-6 py-3 text-lg font-semibold hover:bg-blue-800 rounded-lg transition">
              Alumni Engagement ⬇️
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-56 mt-2">
              <Link
                to="/job-posting"
                className="block px-4 py-2 hover:bg-blue-200"
              >
                Job Posting
              </Link>
              <Link
                to="/internship" // Link to Internship page
                className="block px-4 py-2 hover:bg-blue-200"
              >
                Internship
              </Link>
              <Link
                to="/career-resources" // Link to Career Resources page
                className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg"
              >
                Career Resources
              </Link>
            </div>
          </div>

          {/* 🟦 Alumni Directory */}
          <div className="relative group">
            <button className="px-6 py-3 text-lg font-semibold hover:bg-blue-800 rounded-lg transition">
              Alumni Directory ⬇️
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-56 mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-blue-200">
                Alumni Management
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">
                Alumni Profile
              </a>
            </div>
          </div>

          {/* 🟦 Events */}
          <div className="relative group">
            <button className="px-6 py-3 text-lg font-semibold hover:bg-blue-800 rounded-lg transition">
              Events ⬇️
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black rounded-lg shadow-lg w-56 mt-2">
              <a href="#" className="block px-4 py-2 hover:bg-blue-200">
                Upcoming Events
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-blue-200 rounded-b-lg">
                Conference
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 🔹 Main Content Placeholder */}
      <div className="flex-grow flex items-center justify-center text-gray-600 text-xl font-semibold">
        Select an option from the menu above to proceed.
      </div>

      {/* 🔹 Fixed Bottom Section for Donation & Feedback */}
      <footer className="w-full bg-gray-200 py-4 flex justify-center space-x-10">
        <button className="w-60 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition">
          💰 Donate
        </button>
        <button className="w-60 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          ✍️ Feedback
        </button>
      </footer>
    </div>
  );
};

export default AlumniDashboard;