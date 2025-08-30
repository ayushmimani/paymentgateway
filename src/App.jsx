import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Profile Page
function Profile() {
  return (
    <div className="page">
      <h1>👤 Profile Page</h1>
      <p>Welcome to your profile!</p>
    </div>
  );
}

// Terms & Policies
function TermsPolicies() {
  return (
    <div className="page">
      <h1>📜 Terms & Policies</h1>
      <p>Here are our terms and policies (dummy text).</p>
    </div>
  );
}

// Privacy Policy
function PrivacyPolicy() {
  return (
    <div className="page">
      <h1>🔒 Privacy Policy</h1>
      <p>Your data privacy is important to us (dummy text).</p>
    </div>
  );
}

// Contact
function Contact() {
  return (
    <div className="page">
      <h1>📩 Contact Us</h1>
      <p>Email: contact@example.com</p>
    </div>
  );
}

// Team
function Team() {
  return (
    <div className="page">
      <h1>👥 Our Team</h1>
      <p>Meet our awesome team members (dummy text).</p>
    </div>
  );
}

// Terms of Services
function TermsServices() {
  return (
    <div className="page">
      <h1>⚖️ Terms of Services</h1>
      <p>Here are our terms of services (dummy text).</p>
    </div>
  );
}

// App Component with Router
function App() {
  return (
    <Router>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
        {/* Navbar */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ marginRight: "15px" }}>Profile</Link>
          <Link to="/terms-policies" style={{ marginRight: "15px" }}>Terms & Policies</Link>
          <Link to="/privacy-policy" style={{ marginRight: "15px" }}>Privacy Policy</Link>
          <Link to="/contact" style={{ marginRight: "15px" }}>Contact</Link>
          <Link to="/team" style={{ marginRight: "15px" }}>Team</Link>
          <Link to="/terms-services">Terms of Services</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/terms-policies" element={<TermsPolicies />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/terms-services" element={<TermsServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
