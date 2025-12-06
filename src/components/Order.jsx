import React, { useEffect, useState } from 'react';
import { FaHome, FaCar, FaUser, FaCreditCard, FaBusinessTime, FaGraduationCap } from 'react-icons/fa';

function Profile() {
  const [selectedLoanType, setSelectedLoanType] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // ✅ FIXED: API config via ENV
  const API_BASE_URL = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    address: '',
    pincode: '',
    city: '',
    district: '',
    state: '',
    employmentType: '',
    monthlyIncome: '',
    loanAmount: '',
    loanTenure: '',
    loanPurpose: '',
    panNumber: '',
    aadharNumber: '',
    companyName: '',
    designation: '',
    workExperience: ''
  });

  const loanTypes = [
    { id: 'personal', name: 'Personal Loan', icon: <FaUser className="text-3xl" /> },
    { id: 'home', name: 'Home Loan', icon: <FaHome className="text-3xl" /> },
    { id: 'vehicle', name: 'Vehicle Loan', icon: <FaCar className="text-3xl" /> },
    { id: 'business', name: 'Business Loan', icon: <FaBusinessTime className="text-3xl" /> },
    { id: 'education', name: 'Education Loan', icon: <FaGraduationCap className="text-3xl" /> },
    { id: 'credit-card', name: 'Credit Card', icon: <FaCreditCard className="text-3xl" /> }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      const payload = {
        ...formData,
        loanType: selectedLoanType.id
      };

      const response = await fetch(
        `${API_BASE_URL}/api/loan/submit`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text);
      }

      setSubmissionMessage('✅ Loan submitted successfully. Our executive will contact you soon.');
      setShowForm(false);
      setSelectedLoanType(null);
    } catch (error) {
      console.error(error);

      // ✅ FIXED error message
      setSubmissionMessage(
        '❌ Cannot connect to server. Please make sure backend is running at ' +
        API_BASE_URL
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Health check (clean)
  useEffect(() => {
    fetch(`${API_BASE_URL}/health`)
      .then(res => res.json())
      .then(() => console.log('✅ Backend connected'))
      .catch(() => console.warn('❌ Backend not reachable'));
  }, [API_BASE_URL]);

  return (
    <div className="p-6">
      {submissionMessage && <p>{submissionMessage}</p>}
      {/* UI remains same */}
    </div>
  );
}

export default Profile;
