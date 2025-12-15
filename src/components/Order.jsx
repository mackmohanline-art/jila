import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaHome,
  FaCar,
  FaBusinessTime,
  FaGraduationCap,
  FaCreditCard
} from "react-icons/fa";

const API_BASE_URL = "https://ankit-master.onrender.com";

function Profile() {
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    loanAmount: "",
    loanTenure: ""
  });

  const loanTypes = [
    { id: "personal", name: "Personal Loan", icon: <FaUser /> },
    { id: "home", name: "Home Loan", icon: <FaHome /> },
    { id: "vehicle", name: "Vehicle Loan", icon: <FaCar /> },
    { id: "business", name: "Business Loan", icon: <FaBusinessTime /> },
    { id: "education", name: "Education Loan", icon: <FaGraduationCap /> },
    { id: "credit", name: "Credit Card", icon: <FaCreditCard /> }
  ];

  useEffect(() => {
    fetch(`${API_BASE_URL}/health`)
      .then(res => res.json())
      .then(() => console.log("✅ Backend connected"))
      .catch(() => console.log("❌ Backend not reachable"));
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.fullName) return "Enter full name";
    if (!/^\d{10}$/.test(formData.mobile)) return "Invalid mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email";
    if (!formData.loanAmount) return "Enter loan amount";
    if (!formData.loanTenure) return "Enter loan tenure";
    return null;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setMessage(`❌ ${error}`);
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch(`${API_BASE_URL}/api/loan/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          mobile: formData.mobile,
          email: formData.email,
          loanType: selectedLoanType.name,
          loanAmount: Number(formData.loanAmount),
          loanTenure: Number(formData.loanTenure)
        })
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      setMessage("✅ Loan application submitted successfully");
      setShowForm(false);
      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        loanAmount: "",
        loanTenure: ""
      });
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 30, maxWidth: 900, margin: "auto" }}>
      <h1>Apply for Loan</h1>

      {/* Loan Types */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
        {loanTypes.map(loan => (
          <div
            key={loan.id}
            onClick={() => {
              setSelectedLoanType(loan);
              setShowForm(true);
              setMessage("");
            }}
            style={{
              padding: 20,
              border: "2px solid #2563eb",
              cursor: "pointer",
              borderRadius: 10
            }}
          >
            <h3>{loan.icon} {loan.name}</h3>
            <button>Apply</button>
          </div>
        ))}
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} style={{ marginTop: 30 }}>
          <h2>{selectedLoanType.name} Application</h2>

          {message && <p>{message}</p>}

          <input
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          /><br /><br />

          <input
            name="mobile"
            placeholder="Mobile"
            value={formData.mobile}
            onChange={handleChange}
          /><br /><br />

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />

          <input
            name="loanAmount"
            placeholder="Loan Amount"
            value={formData.loanAmount}
            onChange={handleChange}
          /><br /><br />

          <input
            name="loanTenure"
            placeholder="Loan Tenure (months)"
            value={formData.loanTenure}
            onChange={handleChange}
          /><br /><br />

          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

export default Profile;

