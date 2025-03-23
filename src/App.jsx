import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import TypingEffect from "./Components/TypingEffect";
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import AlumniDashboard from "./Dashboard/Alumni/AlumniDashboard";
import AdminDashboard from "./Dashboard/Admin/AdminDashboard";
import NotFound from "./Components/NotFound";
import AlumniDirectory from "./Components/AlumniDirectory";
import StudentData from "./Dashboard/Admin/StudentData";
import AlumniData from "./Dashboard/Admin/AlumniData";
import StudentFeedback from "./Feedbacks/StudentFeedback";
import AlumniSurveyForm from "./Feedbacks/AlumniSurveyForm";
import AlumniRegistrationForm from "./Feedbacks/AlumniRegistrationForm";
import AlumniProfile from "./Dashboard/Alumni/AlumniProfile";
import CareerResource from "./Dashboard/Alumni/CareerResource";
import SuccessStory from "./Dashboard/Alumni/SuccessStory";
import UpcomingEvents from "./Dashboard/Alumni/UpcomingEvents";
import JobPostingForm from "./Dashboard/Alumni/JobPostingForm";
import InternshipForm from "./Dashboard/Alumni/InternshipForm";
import CareerResources from "./Dashboard/Alumni/CareerResources";
import JobDetails from "./Dashboard/Student/JobDetails";
import InternshipDetails from "./Dashboard/Student/InternshipDetails";
import ResourceDetails from "./Dashboard/Student/ResourceDetails";
import JobPostingsList from "./Dashboard/Student/JobPostingsList"; // Added
import InternshipsList from "./Dashboard/Student/InternshipsList"; // Added
import CareerResourcesList from "./Dashboard/Student/CareerResourcesList"; // Added

function App() {
  const [jobPostings, setJobPostings] = useState([]);
  const [internships, setInternships] = useState([]);
  const [careerResources, setCareerResources] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/typingeffect" element={<TypingEffect />} />
        <Route
          path="/studentdashboard"
          element={
            <StudentDashboard
              jobPostings={jobPostings}
              internships={internships}
              careerResources={careerResources}
            />
          }
        />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route
          path="/alumnidashboard"
          element={
            <AlumniDashboard
              setJobPostings={setJobPostings}
              setInternships={setInternships}
              setCareerResources={setCareerResources}
            />
          }
        />
        <Route path="/studentfeedback" element={<StudentFeedback />} />
        <Route path="/alumni-directory" element={<AlumniDirectory />} />
        <Route path="/studentdata" element={<StudentData />} />
        <Route path="/alumnidata" element={<AlumniData />} />
        <Route path="/AlumniSurveyForm" element={<AlumniSurveyForm />} />
        <Route path="/AlumniProfile" element={<AlumniProfile />} />
        <Route path="/CareerResource" element={<CareerResource />} />
        <Route path="/AlumniRegistrationForm" element={<AlumniRegistrationForm />} />
        <Route path="/SuccessStory" element={<SuccessStory />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/job-posting" element={<JobPostingForm setJobPostings={setJobPostings} />} />
        <Route path="/internship" element={<InternshipForm setInternships={setInternships} />} />
        <Route
          path="/career-resources"
          element={<CareerResources setCareerResources={setCareerResources} />}
        />
        <Route
          path="/job-postings-list"
          element={<JobPostingsList jobPostings={jobPostings} />}
        />
        <Route
          path="/internships-list"
          element={<InternshipsList internships={internships} />}
        />
        <Route
          path="/career-resources-list"
          element={<CareerResourcesList careerResources={careerResources} />}
        />
        <Route
          path="/job-details/:id"
          element={<JobDetails jobPostings={jobPostings} />}
        />
        <Route
          path="/internship-details/:id"
          element={<InternshipDetails internships={internships} />}
        />
        <Route
          path="/resource-details/:id"
          element={<ResourceDetails careerResources={careerResources} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;