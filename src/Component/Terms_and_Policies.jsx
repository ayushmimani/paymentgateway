function Termpolicies () {
  return (
    <>
      <div style={{ 
        fontFamily: "Arial, sans-serif", 
        padding: "20px", 
        maxWidth: "800px", 
        margin: "0 auto" 
      }}>
        {/* Header */}
        <header style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1 style={{ color: "#2c3e50" }}>🚀 This is Dev Web</h1>
          <p style={{ fontSize: "18px", color: "#555" }}>
            Welcome to our platform. Below are the dummy Terms & Services.
          </p>
        </header>

        {/* Terms & Services Section */}
        <section style={{ background: "#f9f9f9", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h2 style={{ color: "#34495e" }}>📜 Terms & Services (Dummy Notes)</h2>
          <ul style={{ lineHeight: "1.8", color: "#333" }}>
            <li><strong>Use of Services:</strong> Must be 18+, no illegal use, violation may lead to termination.</li>
            <li><strong>Accounts:</strong> Keep login safe, provide accurate info.</li>
            <li><strong>Content:</strong> Personal use only, user content licensed for service use.</li>
            <li><strong>Payments:</strong> Fees non-refundable (if applicable), pricing may change with notice.</li>
            <li><strong>Liability:</strong> We are not responsible for damages/losses.</li>
            <li><strong>Changes:</strong> Terms may be updated anytime.</li>
            <li><strong>Governing Law:</strong> Based on [Your Country/State].</li>
            <li><strong>Contact:</strong> your-email@example.com</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Termpolicies
